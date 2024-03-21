from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_community.llms import LlamaCpp
from transformers import AutoTokenizer
from nltk.tokenize import sent_tokenize
import nltk
nltk.download('punkt')

from config import MODEL_PATH, SYSTEM_PROMPT

from pydantic import BaseModel

class ParaphraseRequest(BaseModel):
    text: str

tokenizer = AutoTokenizer.from_pretrained("indischepartij/OpenMia-Indo-Mistral-7b-v4")
prompt = PromptTemplate.from_template(SYSTEM_PROMPT)

llm = LlamaCpp(
    model_path=MODEL_PATH,
    verbose=True,
    n_gpu_layers=-1,
    n_ctx=2048,
)

chain = LLMChain(prompt=prompt, llm=llm)

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "Hello World"}


@app.post("/paraphrase")
async def paraphrase(request: ParaphraseRequest):
    text = request.text
    res = ""
    sentences = sent_tokenize(text)
    chunks = []
    current_chunk = ""
    current_chunk_length = 0
    for sentence in sentences:
        tokens = tokenizer.tokenize(sentence)
        if current_chunk_length + len(tokens) <= 1536:
            current_chunk += sentence + " "
            current_chunk_length += len(tokens)
        else:
            chunks.append(current_chunk.strip())
            current_chunk = sentence + " "
            current_chunk_length = len(tokens)
    if current_chunk:
        chunks.append(current_chunk.strip())

    for chunk in chunks:
        result = chain.run(chunk)
        res += result

    return res
