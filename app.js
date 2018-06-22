var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


// Import Models
var Aluno = require('./models/aluno');
var Curso = require('./models/curso');


// Connect to Mongoose
mongoose.connect('mongodb://localhost/biologiatotal');
var db = mongoose.connection;

app.get('/', (req, res) => res.send('Hello World!'));




// ALUNOS
// [C]reate
app.post('/api/alunos', (req, res) => {
  var aluno = req.body;
	Aluno.addAluno(aluno, (err, aluno) => {
		if (err) throw err;
		res.json(aluno);
	});
});
// [R]read
app.get('/api/alunos', (req, res) => {
	Aluno.getAlunos((err, alunos) => {
		if (err) throw err;
		res.json(alunos);
	});
});
app.get('/api/alunos/:_id', (req, res) => {
	Aluno.getAlunoById(req.params._id, (err, aluno) => {
		if (err) throw err;
		res.json(aluno);
	});
});
// [U]pdate
app.put('/api/alunos/:_id', (req, res) => {
	var id = req.params._id;
	var aluno = req.body;
	Aluno.updateAluno(id, aluno, (err, aluno) => {
		if (err) throw err;
		res.json(aluno);
	});
});
// [D]elete
app.delete('/api/alunos/:_id', (req, res) => {
	var id = req.params._id;
	Aluno.removeAluno(id, (err, aluno) => {
		if (err) throw err;
		res.json(aluno);
	});
});



// CURSOS
// [C]reate
app.post('/api/cursos', (req, res) => {
	var curso = req.body;
	Curso.addCurso(curso, (err, curso) => {
		if (err) throw err;
		res.json(curso);
	});
});
// [R]ead
app.get('/api/cursos', (req, res) => {
	Curso.getCursos((err, cursos) => {
		if (err) throw err;
		res.json(cursos);
	});
});
app.get('/api/cursos/:_id', (req, res) => {
	Curso.getCursoById(req.params._id, (err, curso) => {
		if (err) throw err;
		res.json(curso);
	});
});
// [U]pdate
app.put('/api/cursos/:_id', (req, res) => {
	var id = req.params._id;
	var curso = req.body;
	Curso.updateCurso(id, curso, (err, curso) => {
		if (err) throw err;
		res.json(curso);
	});
});
// [D]elete
app.delete('/api/cursos/:_id', (req, res) => {
	var id = req.params._id;
	Curso.removeCurso(id, (err, curso) => {
		if (err) throw err;
		res.json(curso);
	});
});



app.listen('4000');
