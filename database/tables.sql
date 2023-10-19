-- Active: 1697676232683@@127.0.0.1@5432
CREATE Table tbl_api_pokemon
(
    id serial PRIMARY KEY,
    nombre VARCHAR(50),
    tipo VARCHAR(20),
    habilidad VARCHAR(50),
    pokedex_num NUMERIC
);

SELECT * FROM tbl_api_pokemon;

INSERT INTO tbl_api_pokemon
(nombre, tipo, habilidad, pokedex_num)
VALUES
('Charmander', 'Fuego', 'Mar de Llamas', 0004),
('Charmeleon', 'Fuego', 'Mar de Llamas', 0005),
('Charizard', 'Fuego Volador', 'Mar de Llamas', 0006),
('Squirtle', 'Agua', 'Torrente', 0007);