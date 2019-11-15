-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-11-15 16:55:22.913

-- foreign keys
ALTER TABLE Compras DROP CONSTRAINT Compras_Envios;

ALTER TABLE Compras DROP CONSTRAINT Compras_Pago;

ALTER TABLE Envios DROP CONSTRAINT Envios_Compras;

ALTER TABLE Fotos DROP CONSTRAINT Fotos_Productos;

ALTER TABLE Join_Product_Compra DROP CONSTRAINT Join_Product_Compra_Compras;

ALTER TABLE Join_Product_Compra DROP CONSTRAINT Join_Product_Compra_Productos;

ALTER TABLE Pago DROP CONSTRAINT Pago_Usuarios;

ALTER TABLE Shopping_Cart DROP CONSTRAINT Shopping_Cart_Productos;

ALTER TABLE Shopping_Cart DROP CONSTRAINT Shopping_Cart_Usuarios;

ALTER TABLE WhishList DROP CONSTRAINT WhishList_Productos;

ALTER TABLE WhishList DROP CONSTRAINT WhishList_Usuarios;

-- tables
DROP TABLE Compras;

DROP TABLE Envios;

DROP TABLE Fotos;

DROP TABLE Join_Product_Compra;

DROP TABLE Pago;

DROP TABLE Productos;

DROP TABLE Shopping_Cart;

DROP TABLE Usuarios;

DROP TABLE WhishList;

-- End of file.

