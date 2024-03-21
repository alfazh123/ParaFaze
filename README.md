# ParaFaze

Simple and easy to use tool for paraphasing text. It uses LLM to generate paraphrases of the input text. The tool is
built using NextJs and FastAPI.

LLM model
used: [OpenMia-Indo-Mistral-7b-v4-GGUF](https://huggingface.co/indischepartij/OpenMia-Indo-Mistral-7b-v4-GGUF)

# Installation

Prerequisites:

-   NodeJs > v20.11.1
-   Python > 3.11
-   Pyenv

## Frontend

-   First, install the required packages using the following command:
    ```bash
    npm install
    ```
-   Then, start the server using the following command:
    ```bash
    npm run dev
    ```

## Backend

-   First, download the model from [here](https://huggingface.co/indischepartij/OpenMia-Indo-Mistral-7b-v4-GGUF/tree/main)
    and place it in the `server/model' directory.
-   If you are using unix system ucan download teh model using the following command:
    ```bash
    make download-model
    ```
-   Then, install the required packages using the following command:
    ```bash
    make install-be
    ```
-   Finally, start the server using the following command:
    ```bash
    make start-be
    ```

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
