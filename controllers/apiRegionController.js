const { json } = require('express');
const db = require ('../database/conn');

const getRegion = async( req, res)=>{

    let sql  = 'select * from tbl_region_pokemon';
    const result = await db.query(sql);
    if (result.length>0){
        res.json(result);
    }else{
        res.status(404).json(result);
    }
}

const getIdRegion = async (req, res )=>{

    const params = [
        req.params.id
    ]

    let sql  = 'select * from tbl_region_pokemon where id = $1';
    const result = await db.query(sql, params);
    if (result.length>0){
        res.json(result);
    }else{
        res.status(404).json(result);
    }
}

const postRegion = async ( req, res )=>{

    const params = [

        req.body.nombre_region, 
        req.body.habitat 

    ];

    let sql  = `insert into tbl_region_pokemon
                (nombre_region, habitat)
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

    getRegion,
    getIdRegion,
    postRegion

}