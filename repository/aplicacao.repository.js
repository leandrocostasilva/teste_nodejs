const conexao = require("../infraestrutura/conexao")

class AplicacaoRepository{
    adiciona(aplicacao, res){
        console.log(aplicacao);
        const sql = "INSERT INTO aplicacao SET ?";

        conexao.query(sql, aplicacao, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(aplicacao)
            }
        });       

    }

    lista(res){
        const sql = "SELECT * FROM aplicacao";

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultados);
            }
        });

    }

    listaPorId(res, id){
        const sql = `SELECT * FROM aplicacao where id=${id}`;

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultados[0]);
            }
        });

    }

    altera(res, id, valores){
        const sql = 'UPDATE aplicacao SET ? WHERE id=?';

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json({...valores, id});
            }
        });

    }

    deleta(res, id){
        const sql = `DELETE FROM aplicacao WHERE id=${id}`;

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json({id});
            }
        });

    }
}

module.exports = new AplicacaoRepository;