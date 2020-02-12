const Aplicacao = require('../repository/aplicacao.repository')

module.exports = app => {

    const { executaSql }  = require('../infraestrutura/conexao');
    
    app.get('/api/repository/aplicacao', (req, res) => {        
        
        var sql = 'select * from aplicacao'
        var data;

        executaSql(sql, function(result){ 
            console.log( 'Data : ' + result);
            var getKeys = function(result){
                var keys = [];
                for(var key in result){
                   keys.push(key);
                }
                return keys;
             }
            //var keys = Object.keys(result);
            console.log("keys"+getKeys);
            data = result;
          });
        ;
        //res.json('teste post '+req.body);
        //res.json('teste get ' + result);
        //res.json('teste get ' + data);
    });

    app.post('/api/repository/aplicacao', (req, res) => {
        console.log('teste 2 '+req.body);
        console.log(JSON.stringify(req.body, null, 2));
        const aplicacao  = req.body;
        aplicacao.data_criacao = new Date();
        aplicacao.data_alteracao = new Date();
        aplicacao.usuario_criacao = '93242290';
        aplicacao.usuario_alteracao = '93242290';
        Aplicacao.adiciona(aplicacao);
        console.log('teste post '+req.body);
        res.send("Post aplicacao");
    });
  }