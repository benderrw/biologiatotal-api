var mongoose = require('mongoose');

// Curso Schema
var cursoSchema = mongoose.Schema({
	titulo: {
		type: String,
		required: true
	},
	descricao: {
		type: String
	}
});

var Curso = module.exports = mongoose.model('Curso', cursoSchema);

// [C]reate
module.exports.addCurso = (curso, callback) => Curso.create(curso, callback);

// [R]ead
module.exports.getCursos = (callback, limit) => Curso.find(callback).limit(limit);
module.exports.getCursoById = (id, callback) => Curso.findById(id, callback);

// [U]pdate
module.exports.updateCurso = (id, curso, options, callback) => {
	var query = {_id: id};
	var update = {
		titulo: curso.titulo,
		descricao: curso.descricao
	};
	Curso.findOneAndUpdate(query, update, options, callback);
};

// [D]elete
module.exports.removeCurso = (id, callback) => {
	var query = {_id: id};
	Curso.remove(query, callback);
};