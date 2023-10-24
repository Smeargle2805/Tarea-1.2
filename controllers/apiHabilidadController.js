const { json } = require('express');
const db = require ('../database/conn');

const getHabilidad = async( req, res)=>{

    let sql  = 'select * from tbl_habilidad_pokemon';
    const result = await db.query(sql);
    if (result.length>0){
        res.json(result);
    }else{
        res.status(404).json(result);
    }
}

const getIdHabilidad = async (req, res )=>{

    const params = [
        req.params.id
    ]

    let sql  = 'select * from tbl_habilidad_pokemon where id = $1';
    const result = await db.query(sql, params);
    if (result.length>0){
        res.json(result);
    }else{
        res.status(404).json(result);
    }
}

const postHabilidad = async ( req, res )=>{

    const params = [

        req.body.nombre_habilidad, 
        req.body.descripcion_habilidad 

    ];

    let sql  = `insert into tbl_habilidad_pokemon
                (nombre_habilidad, descripcion_habilidad)
                values 
                ($1, $2)
                returning *   `;
    
    try {

        const result = await db.query(sql, params);
        res.json(result);

    }catch (error){

        res.status(500).json(error);

    }
}

module.exports = {

    getHabilidad,
    getIdHabilidad,
    postHabilidad

}