//importa o knex
const knex = require('knex'); 

//importa o arquivo de configuração
const configuration = require('../../knexfile'); 

// cria uma conexão passando como padrao a configuração development
const connection = knex(configuration.development); 

module.exports = connection; //exportar comunicação