insert into customers
( email, password, phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com', '1234', '0524340050','Moran','Gozlan','Tel Aviv',true);

insert into customers
( email, password, phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com', '1234', '0524340051','Liron','Dror','Tel Aviv',true);
insert into customers
( email, password, phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com', '1234', '0524340052','Tal','Levi','Tel Aviv',true);
insert into customers
( email,password, phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com', '1234', '0524340062','Lior','Aviv','Tel Aviv',true);

insert into customers
( email,password, phoneNumber,firstName,lastName,address,active)
values
('morangozlan88@gmail.com','1234', '0524340054','Liam','Tal','Tel Aviv',true);

insert into customers
( email,password, phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com','1234', '0524340055','Lian','Gil','Tel Aviv',true);

insert into customers
( email,password, phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com','1234', '0524340056','Bob','Fik','Tel Aviv',true);

insert into customers
( email,password, phoneNumber,firstName,lastName,address,active)
values
('morangozlan@hotmail.com','1234', '0524340057','David','Gir','Tel Aviv',true);

insert into motoboys
(idNumber,firstName,lastName,email,password, phoneNumber,rate,active)
values
('301459848','Tamar','Dir','morangozlan@hotmail.com','1234','053-4740090',4,true);

insert into motoboys
(idNumber,firstName,lastName,email,password, phoneNumber,rate,active)
values
('301459848','Kim','Dror','morangozlan@hotmail.com','1234','053-4740090',3,true);
insert into motoboys
(idNumber,firstName,lastName,email,password, phoneNumber,rate,active)
values
('301459848','Lavi','Dan','morangozlan@hotmail.com','1234','053-4740090',5,true);
insert into motoboys
(idNumber,firstName,lastName,email,password, phoneNumber,rate,active)
values
('301459848','Haim','Hen','morangozlan@hotmail.com','1234', '053-4740090',4,true);

insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,status,active)
values
(1,1,50,'2018-01-01','2018-01-01','2018-01-01','haim','0524546670','small', 'close',true);

insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,status,active)
values
(2,2,50,'2018-04-01','2018-04-01','2018-04-01','Dina','0524546670','small', 'close',true);

insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,status,active)
values
(3,3,50,'2018-06-01','2018-01-02','2018-01-01','Ziv','0524546670','small', 'close',true);

insert into orders
(customerId,motoboyId,price,orderDate,collectDate,deliveryDate,contactDestination,phoneDestination,deliveryType,status,active)
values
(4,4,50,'2018-06-24','2018-06-24',null,'Ziv','0524546670','small', 'Waiting for motoboy',true);

insert into comments
(comment,customerId,motoboyId,orderId,rate,active)
values
('nice person',1,1,1,3,true);

insert into comments
(comment,customerId,motoboyId,orderId,rate,active)
values
('AWSOME person',2,2,2,3,true);

insert into comments
(comment,customerId,motoboyId,orderId,rate,active)
values
('Crazy person',3,3,3,5,true);