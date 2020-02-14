const Aplicacao = require('../repository/aplicacao.repository');
const moment = require('moment');

module.exports = app => {

    const { executaSql }  = require('../infraestrutura/conexao');
    
    app.get('/api/repository/aplicacao', (req, res) => {        
        Aplicacao.lista(res);
    });

    app.get('/api/repository/aplicacao/:id', (req, res) => {  
        
        const id = parseInt(req.params.id);
        
        Aplicacao.listaPorId(res, id)
    });

    app.post('/api/repository/aplicacao', (req, res) => {
        const aplicacao  = req.body;
        const data_atual  = moment(new Date(), 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS') ;
        const usuario = '93242290';
        const dataEhValida = moment(data_atual).isValid();
        console.log(dataEhValida);
        const usuarioEhValido = usuario.length>2;

        const validacoes = [
            {
                nome: "data",
                valido: dataEhValida,
                mensagem: "data deve ser maior ou igual a data atual"
            },
            {
                nome: 'usuario',
                valido: usuarioEhValido,
                mensagem: "Usuario deve ter mais que 2 caracteres"
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;

        if(existemErros){
            res.status(400).json(erros);
        }else{
            aplicacao.data_criacao = data_atual;
            aplicacao.data_alteracao = data_atual;
            aplicacao.usuario_criacao = usuario;
            aplicacao.usuario_alteracao = usuario;
            Aplicacao.adiciona(aplicacao, res);
        }
    });

    app.patch('/api/repository/aplicacao/:id', (req, res) => {  
        
        const id = parseInt(req.params.id);
        const valores = req.body;
        console.log(req.body);
        Aplicacao.altera(res, id, valores);
    });

    app.delete('/api/repository/aplicacao/:id', (req, res) => {  
        
        const id = parseInt(req.params.id);
        Aplicacao.deleta(res, id);
    });
  }