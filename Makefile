ifeq ($(OS),Windows_NT)
	ACTIVATE = venv\Scripts\activate.bat
	OS_DETECTED := Windows
	VENV := python -m venv venv
	RUN_CMD := uvicorn main:app --host 0.0.0.0 --port 8000
else
	OS_DETECTED := $(shell uname)
	VENV := python3 -m venv venv
	RUN_CMD := granian --interface asgi --host 0.0.0.0 --port 8000 main:app
endif

ifeq ($(OS_DETECTED),Linux)
	ACTIVATE = . venv/bin/activate
else ifeq ($(OS_DETECTED),Darwin)
	ACTIVATE = . venv/bin/activate
else ifeq ($(OS_DETECTED),Windows)
	ACTIVATE = venv\Scripts\activate.bat
else
	$(error Unsupported operating system. Please run on Linux, macOS, or Windows.)
endif

download-model:
	cd server/model && wget "https://huggingface.co/indischepartij/OpenMia-Indo-Mistral-7b-v4-GGUF/resolve/main/openmia-indo-mistral-7b-v4.Q4_K_M.gguf"

install-be:
	cd server && $(VENV) && $(ACTIVATE) && pip install -r requirements.txt

run-be:
	cd server && $(ACTIVATE) && cd src && $(RUN_CMD)

freeze:
	cd server && $(ACTIVATE) && pip freeze > requirements.txt

venv:
	$(VENV)

rm-venv:
	cd server && rm -rf venv

.PHONY: install-be run-be venv help
