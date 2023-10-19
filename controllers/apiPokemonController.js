const { json } = require('express');
const db = require ('../database/conn');

const getPokemon = async (req, res)=>{

    let sql = 'select * from tbl_api_pokemon';
    const result = await db.query(sql);
    res.json(result);
}

const getIdPokemon = async (req, res)=>{

    let params = [
        req.params.id
    ];

    let sql = 'select * from tbl_api_pokemon where id = $1';
    const result = await db.query(sql, params);
    res.json(result);
}

module.exports = {

    getPokemon,
    getIdPokemon
}