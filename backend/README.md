Para Utilizar o Backend é necessário Instalar:

- Conda ou Miniconda (Gerenciador de pacotes com python embarcado)

Uma vez instaladas as dependências, deve-se instalar o ambiente no conda pasta(backend/environment):

- conda env create -f environment.yml

Uma vez instalado o ambiente deve-se ativá-lo:

- conda activate juridico

Agora é possível utilizar o projeto chamando o arquivo main (/backend):

- python main.py

Para Atualizar o Ambiente:

- source activate juridico

- conda env update --file environment.yml
