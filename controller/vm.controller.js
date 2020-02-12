module.exports = app => {

    const { executaSql }  = require('../infraestrutura/conexao');
    
    app.get('/vm', (req, res) => {        
        
        var sql = 'select * from vm'
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

    app.post('/vm', (req, res) => {
        res.json('teste post '+req.body);
    });
  }