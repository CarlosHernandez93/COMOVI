-- Crear tabla para los usuarios
CREATE TABLE usuarios(
    id INTEGER PRIMARY KEY, 
    nombre VARCHAR(100) NOT NULL, 
    contraseña, VARCHAR(150) NOT NULL,
    correo VARCHAR(200) NOT NULL, 
    cargo VARCHAR(100) NOT NULL, 
    carrera VARCHAR(150) NOT NULL,
);