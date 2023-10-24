-- Active: 1697676232683@@127.0.0.1@5432
DO $$
BEGIN
    DROP TABLE IF EXISTS tbl_api_pokemon CASCADE;

    DROP TABLE IF EXISTS tbl_habilidad_pokemon CASCADE;

    DROP TABLE IF EXISTS tbl_region_pokemon CASCADE;

        CREATE TABLE IF NOT EXISTS tbl_region_pokemon(
            id SERIAL PRIMARY KEY,
            nombre_region VARCHAR(30),
            habitat VARCHAR(50)
        );

        CREATE TABLE IF NOT EXISTS tbl_habilidad_pokemon(
            id SERIAL PRIMARY KEY,
            nombre_habilidad VARCHAR(100),
            descripcion_habilidad VARCHAR(200)
        );

        CREATE Table if NOT EXISTS tbl_api_pokemon
        (
            id serial PRIMARY KEY,
            nombre VARCHAR(50),
            tipo VARCHAR(20),
            id_habilidad INT REFERENCES tbl_habilidad_pokemon(id),
            id_region INT REFERENCES tbl_region_pokemon(id),
            pokedex_num NUMERIC
        );
END;
$$;

SELECT  hija.id,
        hija.nombre,
        hija.tipo,
        hija.pokedex_num,
        padre.nombre_region,
        padre.habitat
FROM    tbl_api_pokemon AS hija
INNER JOIN tbl_region_pokemon AS padre
ON padre.id = hija.id_region;

SELECT  hija.id,
        hija.nombre,
        hija.tipo,
        hija.pokedex_num,
        padre.nombre_habilidad,
        padre.descripcion_habilidad
FROM    tbl_api_pokemon AS hija
INNER JOIN tbl_habilidad_pokemon AS padre
ON padre.id = hija.id_habilidad;

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
