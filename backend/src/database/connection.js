//importa o knex
const knex = require('knex'); 

//importa o arquivo de configuração
const configuration = require('../../knexfile'); 

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;


// cria uma conexão passando como padrao a configuração development
const connection = knex(config); 

module.exports = connection; //exportar comunicação