OS := $(shell uname)

ifeq ($(OS),Linux)
	ACTIVATE = . venv/bin/activate
else ifeq ($(OS),Darwin)
	ACTIVATE = . venv/bin/activate
else ifeq ($(OS),Windows_NT)
	ACTIVATE = venv\Scripts\activate.bat
else
	$(error Unsupported operating system. Please run on Linux, macOS, or Windows.)
endif

VENV := python3 -m venv venv

install-be:
	cd server && $(VENV) && $(ACTIVATE) && CMAKE_ARGS="-DLLAMA_CUBLAS=on" FORCE_CMAKE=1 pip install llama-cpp-python && pip install -r requirements.txt

run-be:
	cd server && $(ACTIVATE) && cd src && granian --interface asgi --host 0.0.0.0 --port 8000 main:app

freeze:
	cd server && $(ACTIVATE) && pip freeze > requirements.txt

venv:
	$(VENV)

rm-venv:
	cd server && rm -rf venv

.PHONY: install-be run-be venv help