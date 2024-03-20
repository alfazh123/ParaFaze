from fastapi import FastAPI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_community.llms import LlamaCpp
from transformers import AutoTokenizer
from nltk.tokenize import sent_tokenize


from config import MODEL_PATH, SYSTEM_PROMPT

tokenizer = AutoTokenizer.from_pretrained("indischepartij/OpenMia-Indo-Mistral-7b-v4")
prompt = PromptTemplate.from_template(SYSTEM_PROMPT)

llm = LlamaCpp(
    model_path=MODEL_PATH,
    verbose=False,
    n_gpu_layers=-1,
)

chain = LLMChain(prompt=prompt, llm=llm)

app = FastAPI()


@app.get("/")
async def read_root():
    return {"message": "Hello World"}


@app.post("/paraphrase")
async def paraphrase(text: str):
    """
    The Maximum Context Length (MCL) of the model is 512 tokens.

    The input text is split into meaningful chunks of sentences and paraphrased separately.
    """
    res = ""
    sentences = sent_tokenize(text)
    chunks = []
    current_chunk = ""
    for sentence in sentences:
        tokens = tokenizer.tokenize(sentence)
        if len(tokenizer.tokenize(current_chunk)) + len(tokens) <= 256:
            current_chunk += sentence + " "
        else:
            chunks.append(current_chunk.strip())
            current_chunk = sentence + " "
    if current_chunk:
        chunks.append(current_chunk.strip())

    for chunk in chunks:
        res += chain.run(chunk)

    return res


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=8000, host="localhost")
