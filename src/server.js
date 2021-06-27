const express = require('express');
const route = require('./route');
const path = require('path')

const server = express(); //start express and save in a constant

server.set('view engine', 'ejs'); //who is responsible for showing the content in the browser is ejs.

server.use(express.static("public"));

server.set('views', path.join(__dirname, 'views'));
server.use(express.urlencoded({extended: true}));

server.use(route); //express, use file route

server.listen(2000, ()=> console.log("RODANDO")); //arrow function. (Simplified function)
