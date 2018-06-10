var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  database: 'learning',
  port: 3308

});

connection.connect(function(error){

  if(error)
  {
    console.log('error');
  }
  else
  {
    console.log('connected');
  }

});

app.get('/', function(req,res){

  connection.query("SELECT * FROM hello",function(error,rows,fields){
   if(error)
   {
     console.log('error in the database');
   }
   else{
     console.log('successfull entry');
     console.log(rows[0].name);
     res.send(rows);
   }
  });

});

app.listen(3000);