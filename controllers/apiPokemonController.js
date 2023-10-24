const { json } = require('express');
const db = require ('../database/conn');

const getPokemon = async (req, res)=>{

    let sql = `
    SELECT 
    a.id,
    a.nombre,
    a.tipo,
    a.pokedex_num,
    b.nombre_region,
    b.habitat,
    c.nombre_habilidad,
    c.descripcion_habilidad
    FROM tbl_api_pokemon AS a
    INNER JOIN tbl_region_pokemon AS b ON b.id = a.id_region
    INNER JOIN tbl_habilidad_pokemon AS c ON c.id = a.id_habilidad
        `;
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

const getRegionPokemon = async (req, res)=>{

    let params = [
        req.params.region
    ];

    let sql =  `
    SELECT 
    a.id,
    a.nombre,
    a.tipo,
    a.pokedex_num,
    b.nombre_region,
    b.habitat,
    c.nombre_habilidad,
    c.descripcion_habilidad
    FROM tbl_api_pokemon AS a
    INNER JOIN tbl_region_pokemon AS b ON b.id = a.id_region
    INNER JOIN tbl_habilidad_pokemon AS c ON c.id = a.id_habilidad
    where b.nombre_region =  $1
    `;
    const result = await db.query(sql, params);
    res.json(result); 

}

const postPokemon = async (req, res)=>{

    const params = [

        req.body.nombre,
        req.body.tipo,
        req.body.id_habilidad,
        req.body.id_region,
        req.body.pokedex_num

    ];
    
    let sql = ` insert into tbl_api_pokemon
    (nombre, tipo, id_habilidad, id_region, pokedex_num)
    values 
    ($1, $2, $3, $4, $5)
    returning * `;

    try {

        const result = await db.query(sql, params);
        res.json(result); 

    }catch (error){
        res.status(500).json(error);
    }
}

const putPokemon = async (req, res)=>{

    const params = [

        req.body.nombre,
        req.body.tipo,
        req.body.id_habilidad,
        req.body.id_region,
        req.body.pokedex_num
    ];
    
    let sql = ` update tbl_api_pokemon
    set nombre = $1
        tipo = $2,
        id_habilidad = $3
        id_region = $4
        pokedex_num = $5
        where id = $6
    returning * `;

    const result = await db.query(sql, params);
    res.json(result); 

}

const deletePokemon = async (req, res)=>{

    let params = [
        req.params.id
    ];

    let sql = ` delete from tbl_api_pokemon
    where id = $1
    returning * `;

    const result = await db.query(sql, params);
    res.json(result); 

}

module.exports = {

    getPokemon,
    getIdPokemon,
    getRegionPokemon,
    postPokemon,
    putPokemon,
    deletePokemon
}