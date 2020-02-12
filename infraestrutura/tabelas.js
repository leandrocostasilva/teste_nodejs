class Tabela{
    init(conexao){
        this.conexao = conexao;
        this.criaBaseDados();
    }

    criaBaseDados(){

        var sql = "CREATE TABLE IF NOT EXISTS `aplicacao` (`id` int NOT NULL AUTO_INCREMENT, `nome_app` varchar(45) NOT NULL, `data_criacao` timestamp NOT NULL, `data_alteracao` timestamp NOT NULL, `usuario_criacao` varchar(45) NOT NULL, `usuario_alteracao` varchar(45) NOT NULL, PRIMARY KEY (`id`), UNIQUE KEY `nome_app_UNIQUE` (`nome_app`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8 ";

        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela aplicacao criada com sucesso!");
            }

        });

        sql = "CREATE TABLE IF NOT EXISTS `vcenter` ( `id` int NOT NULL AUTO_INCREMENT AUTO_INCREMENT, `nome` varchar(45) NOT NULL, `data_criacao` timestamp NOT NULL, `data_alteracao` timestamp NOT NULL, `usuario_criacao` varchar(45) NOT NULL, `usuario_alteracao` varchar(45) NOT NULL, PRIMARY KEY (`id`) ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;";

        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela vcenter criada com sucesso!");
            }

        });

        sql = "CREATE TABLE IF NOT EXISTS `cluster` ( `id` int NOT NULL AUTO_INCREMENT AUTO_INCREMENT, `nome` varchar(45) NOT NULL, `cpu_porcentagem` int NOT NULL, `total_core` int NOT NULL, `espaco_disco_utilizado` varchar(45) NOT NULL, `data_criacao` timestamp NOT NULL, `data_alteracao` timestamp NOT NULL, `usuario_criacao` varchar(45) NOT NULL, `usuario_alteracao` varchar(45) NOT NULL, `vcenter_id` int NOT NULL, PRIMARY KEY (`id`), KEY `fk_cluster_vcenter1_idx` (`vcenter_id`), CONSTRAINT `cluster_ibfk_1` FOREIGN KEY (`vcenter_id`) REFERENCES `vcenter` (`id`) ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;";

        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela aplicacao criada com sucesso!");
            }

        });

        sql = "CREATE TABLE IF NOT EXISTS `host` ( `id` int NOT NULL AUTO_INCREMENT AUTO_INCREMENT, `nome_vm` varchar(45) NOT NULL, `total_core` int NOT NULL, `total_memoria` int NOT NULL, `total_espaco_disco` int NOT NULL, `workload_procentagem` int NOT NULL, `workload_cores` int NOT NULL, `workload_memoria` int NOT NULL, `workload_disco` int NOT NULL, `nome_so` varchar(45) NOT NULL, `versao_so` varchar(45) NOT NULL, `data_criacao` timestamp NOT NULL, `data_alteracao` timestamp NOT NULL, `usuario_criacao` varchar(45) NOT NULL, `usuario_alteracao` varchar(45) NOT NULL, `cluster_id` int NOT NULL, PRIMARY KEY (`id`,`cluster_id`), UNIQUE KEY `idvm_UNIQUE` (`id`), UNIQUE KEY `nome_vm_UNIQUE` (`nome_vm`), UNIQUE KEY `total_vcpu_UNIQUE` (`total_core`), KEY `fk_host_cluster1_idx` (`cluster_id`), CONSTRAINT `host_ibfk_1` FOREIGN KEY (`cluster_id`) REFERENCES `cluster` (`id`) ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;";

          this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela host criada com sucesso!");
            }

        });

        sql = "CREATE TABLE IF NOT EXISTS `vm` ( `id` int NOT NULL AUTO_INCREMENT AUTO_INCREMENT, `nome_vm` varchar(45) NOT NULL, `total_vcpu` int NOT NULL, `total_memoria` int NOT NULL, `total_espaco_disco` int NOT NULL, `workload_procentagem` int NOT NULL, `workload_cores` int NOT NULL, `workload_memoria` int NOT NULL, `workload_disco` int NOT NULL, `nome_so` varchar(45) NOT NULL, `versao_so` varchar(45) NOT NULL, `data_criacao` timestamp NOT NULL, `data_alteracao` timestamp NOT NULL, `usuario_criacao` varchar(45) NOT NULL, `usuario_alteracao` varchar(45) NOT NULL, `aplicacao_id` int NOT NULL, `host_id` int NOT NULL, PRIMARY KEY (`id`,`aplicacao_id`,`host_id`), UNIQUE KEY `idvm_UNIQUE` (`id`), UNIQUE KEY `nome_vm_UNIQUE` (`nome_vm`), UNIQUE KEY `total_vcpu_UNIQUE` (`total_vcpu`), KEY `fk_vm_aplicacao_idx` (`aplicacao_id`), KEY `fk_vm_host1_idx` (`host_id`), CONSTRAINT `fk_vm_aplicacao` FOREIGN KEY (`aplicacao_id`) REFERENCES `aplicacao` (`id`), CONSTRAINT `vm_ibfk_1` FOREIGN KEY (`host_id`) REFERENCES `host` (`id`) ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;";

        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela vm criada com sucesso!");
            }

        });

    }
}

module.exports = new Tabela;