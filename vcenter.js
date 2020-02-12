
import express from 'express'
const con = require('./connect.js');

app.get('/', (req,res) => {

	var sql = 'select * from vm'
		con.connect(function(err){
		if(err) throw err;
		console.log("Connected!");
		con.query(sql, function(err, result){
			if(err) throw err;
			console.log("Result: " + result);
		});

	});
	//res.render('index.ejs')
})
