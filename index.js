var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  database: 'learn',
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

  connection.query('INSERT INTO hello (id, name, second, third) VALUES ((?),(?),(?),(?))',[2,'arshil','khan','sadaf'],function(error,rows,fields)
  {
   if(error)
   {
     console.log('error in the database');
   }
   else{
    
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

  connection.query('SELECT * FROM hello WHERE id = 5',function(error,rows,fields)
  {
   if(error)
   {
     console.log('error in the database');
   }
   else{
     res.send(rows);
   }
  });

});


app.get('/query2', function(req,res){

  connection.query('SELECT * FROM hello WHERE name = 'pratyush',function(error,rows,fields)
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


app.listen(3000);
