import mysql.connector

mydb = mysql.connector.connect(
    host="172.31.1.195",
    user="root",
    passwd="N9sdhpi2Dhn2",
    database="app"
)

mycursor = mydb.cursor(dictionary=True)

table_save = "tbPenalizacao"
table_fetch = "tbPenalizacao"

db_fields = [
    "id",
    "dataInicioSancao",
    "dataFimSancao",
    "dataReferencia",
    "dataTransitadoJulgado",
    "dataOrigemInformacao",
    "tipoSancao_descricaoResumida",
    "fonteSancao_nomeExibicao",
    "fonteSancao_telefoneContato",
    "fonteSancao_enderecoContato",
    "legislacao_fundamentacaoLegal",
    "orgaoSancionador_nome",
    "orgaoSancionador_siglaUf",
    "orgaoSancionador_poder",
    "sancionado_codigoFormatado",
    "sancionado_nome",
    "valorMulta",
    "pessoa_numeroInscricaoSocial",
    "pessoa_nome",
    "pessoa_razaoSocialReceita",
    "pessoa_nomeFantasiaReceita",
    "pessoa_cnae_secao",
    "pessoa_cnae_subclasse",
    "pessoa_cnae_divisao",
    "pessoa_cnae_grupo",
    "pessoa_cnae_classe",
    "pessoa_municipio_nomeIBGE",
    "pessoa_municipio_pais",
    "pessoa_municipio_uf_sigla",
    "pessoa_municipio_uf_nome",
    "pessoa_naturezaJuridica_descricao",
    "pessoa_naturezaJuridica_descricaoTipo",
    "pessoa_dataAbertura",
    "pessoa_enderecoEletronico",
    "pessoa_numeroTelefone",
    "pessoa_descricaoLogradouro",
    "pessoa_numeroEndereco",
    "pessoa_complementoEndereco",
    "pessoa_numeroCEP",
    "pessoa_nomeBairro",
    "pessoa_codigoFormatado",
    "pessoa_tipoCodigo",
    "pessoa_tipoPessoa",
    "textoPublicacao",
    "linkPublicacao",
    "detalhamentoPublicacao",
    "numeroProcesso",
    "abrangenciaDefinidaDecisaoJudicial"
]