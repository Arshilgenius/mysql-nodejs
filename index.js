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

app.get('/insert', function(req,res,next){

  connection.query('INSERT INTO hello (id, name, second, third) VALUES ((?),(?),(?),(?))',[2,'khan','khan','kham'],function(error,rows,fields)
  {
   if(error)
   {
     console.log('error in the database');
   }
   else{
     console.log('successfull entry');
     console.log(rows.name);
     res.send(rows);
   }
  });

});


app.get('/show', function(req,res){

  connection.query('SELECT * FROM hello',function(error,rows,fields)
  {
   if(error)
   {
     console.log('error in the database');
   }
   else{
     console.log('successfull entry');
     console.log(rows);
     res.send(rows);
   }
  });

});


app.get('/query', function(req,res){

  connection.query('SELECT * FROM hello WHERE id = ?',[2],function(error,rows,fields)
  {
   if(error)
   {
     console.log('error in the database');
   }
   else{
     console.log('successfull entry');
     console.log(rows);
     res.send(rows);
   }
  });

});


app.get('/query2', function(req,res){

  connection.query('SELECT * FROM hello WHERE id = 2',function(error,rows,fields)
  {
   if(error)
   {
     console.log('error in the database');
   }
   else{
     console.log('successfull entry');
     console.log(rows);
     res.send(rows);
   }
  });

});


app.get('/query2', function(req,res){

  connection.query('SELECT * FROM hello WHERE name = arshil',function(error,rows,fields)
  {
   if(error)
   {
     console.log('error in the database');
   }
   else{
     console.log('successfull entry');
     console.log(rows);
     res.send(rows);
   }
  //  connection.end(); //put connection.end() at the end of callback not in the code directly
  });

}); 


app.listen(3000);