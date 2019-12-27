**BACKEND**
========================================================================

Para este projeto utilizamos a api de transparência do governo federal:

    http://www.transparencia.gov.br/api-de-dados/cnep
    
Fizemos um script python que utiliza a biblioteca requests pode ser schedulado para periodicamente chamar esta api,
página a página, e popular uma tabela do banco que é consumida pelo frontend.

O banco de dados utilizado no projeto foi o mysql.

Um servidor com a biblioteca sanic também foi criado para permitir ao frontend acesso às informações do banco
de dados.

**FRONTEND**
========================================================================

Para este projeto utilizamos o framework Angular.
