const conexao = require("../infraestrutura/conexao")

class AplicacaoRepository{
    adiciona(aplicacao){
        console.log(aplicacao);
        const sql = "INSERT INTO aplicacao SET ?";

        conexao.query(sql, aplicacao, (erro, resultado) => {
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado)
            }
        });       

    }
}

module.exports = new AplicacaoRepository;