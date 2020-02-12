const customExpress = require('./config/customexpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');
const port = 3000;

conexao.connect(erro =>{
	if(erro){
		console.log(erro);
	}else{
		console.log('Conectado com sucesso!')
		Tabelas.init(conexao);
		const app = customExpress();
		app.listen(port, () => console.log(`Server is running at localhost:${port}`));
	}
});