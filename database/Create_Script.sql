-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-11-15 16:55:22.913

-- tables
-- Table: Compras
CREATE TABLE Compras (
    compraID int  NOT NULL,
    userID int  NOT NULL,
    productID int  NOT NULL,
    FechaCompra date  NOT NULL,
    SubTotal int  NOT NULL,
    Total int  NOT NULL,
    Tracking varchar(50)  NOT NULL,
    pagoID int  NOT NULL,
    CONSTRAINT Compras_pk PRIMARY KEY  (compraID)
);

-- Table: Envios
CREATE TABLE Envios (
    Tracking varchar(50)  NOT NULL,
    Peso int  NOT NULL,
    Costo int  NOT NULL,
    CompraID int  NOT NULL,
    CONSTRAINT Envios_pk PRIMARY KEY  (Tracking)
);

-- Table: Fotos
CREATE TABLE Fotos (
    productID int  NOT NULL,
    fotoURL varchar(50)  NOT NULL
);

-- Table: Join_Product_Compra
CREATE TABLE Join_Product_Compra (
    productID int  NOT NULL,
    compraID int  NOT NULL
);

-- Table: Pago
CREATE TABLE Pago (
    userID int  NOT NULL,
    pagoID int  NOT NULL,
    CCnumber varchar(16)  NOT NULL,
    ExpDate date  NOT NULL,
    CONSTRAINT Pago_pk PRIMARY KEY  (pagoID)
);

-- Table: Productos
CREATE TABLE Productos (
    productID int  NOT NULL,
    Nombre varchar(50)  NOT NULL,
    Descripcion varchar(100)  NOT NULL,
    Precio int  NOT NULL,
    Dcto int  NOT NULL,
    Categoria varchar(50)  NOT NULL,
    Subcategoria varchar(50)  NULL,
    Referencia varchar(50)  NULL,
    Fecha_Creacion date  NULL,
    CONSTRAINT Productos_pk PRIMARY KEY  (productID)
);

-- Table: Shopping_Cart
CREATE TABLE Shopping_Cart (
    userID int  NOT NULL,
    productID int  NOT NULL
);

-- Table: Usuarios
CREATE TABLE Usuarios (
    userID int  NOT NULL,
    Nombre varchar(50)  NOT NULL,
    Apellidos varchar(50)  NOT NULL,
    Fecha_Nac date  NOT NULL,
    Telefono varchar(15)  NOT NULL,
    Direccion varchar(100)  NOT NULL,
    "Key" varchar(50)  NULL,
    Coins int  NOT NULL,
    Email varchar(50)  NOT NULL,
    Password varchar(20)  NOT NULL,
    CONSTRAINT Usuarios_pk PRIMARY KEY  (userID)
);

-- Table: WhishList
CREATE TABLE WhishList (
    userID int  NOT NULL,
    productID int  NOT NULL
);

-- foreign keys
-- Reference: Compras_Envios (table: Compras)
ALTER TABLE Compras ADD CONSTRAINT Compras_Envios
    FOREIGN KEY (Tracking)
    REFERENCES Envios (Tracking);

-- Reference: Compras_Pago (table: Compras)
ALTER TABLE Compras ADD CONSTRAINT Compras_Pago
    FOREIGN KEY (pagoID)
    REFERENCES Pago (pagoID);

-- Reference: Envios_Compras (table: Envios)
ALTER TABLE Envios ADD CONSTRAINT Envios_Compras
    FOREIGN KEY (CompraID)
    REFERENCES Compras (compraID);

-- Reference: Fotos_Productos (table: Fotos)
ALTER TABLE Fotos ADD CONSTRAINT Fotos_Productos
    FOREIGN KEY (productID)
    REFERENCES Productos (productID);

-- Reference: Join_Product_Compra_Compras (table: Join_Product_Compra)
ALTER TABLE Join_Product_Compra ADD CONSTRAINT Join_Product_Compra_Compras
    FOREIGN KEY (compraID)
    REFERENCES Compras (compraID);

-- Reference: Join_Product_Compra_Productos (table: Join_Product_Compra)
ALTER TABLE Join_Product_Compra ADD CONSTRAINT Join_Product_Compra_Productos
    FOREIGN KEY (productID)
    REFERENCES Productos (productID);

-- Reference: Pago_Usuarios (table: Pago)
ALTER TABLE Pago ADD CONSTRAINT Pago_Usuarios
    FOREIGN KEY (userID)
    REFERENCES Usuarios (userID);

-- Reference: Shopping_Cart_Productos (table: Shopping_Cart)
ALTER TABLE Shopping_Cart ADD CONSTRAINT Shopping_Cart_Productos
    FOREIGN KEY (productID)
    REFERENCES Productos (productID);

-- Reference: Shopping_Cart_Usuarios (table: Shopping_Cart)
ALTER TABLE Shopping_Cart ADD CONSTRAINT Shopping_Cart_Usuarios
    FOREIGN KEY (userID)
    REFERENCES Usuarios (userID);

-- Reference: WhishList_Productos (table: WhishList)
ALTER TABLE WhishList ADD CONSTRAINT WhishList_Productos
    FOREIGN KEY (productID)
    REFERENCES Productos (productID);

-- Reference: WhishList_Usuarios (table: WhishList)
ALTER TABLE WhishList ADD CONSTRAINT WhishList_Usuarios
    FOREIGN KEY (userID)
    REFERENCES Usuarios (userID);

-- End of file.

