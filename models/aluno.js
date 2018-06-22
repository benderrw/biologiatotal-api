var mongoose = require('mongoose');

// Aluno Schema
var alunoSchema = mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	data_nascimento: {
		type: Date
	}
});

var Aluno = module.exports = mongoose.model('Aluno', alunoSchema);

// [C]reate
module.exports.addAluno = (aluno, callback) => Aluno.create(aluno, callback);

// [R]ead
module.exports.getAlunos = (callback, limit) => Aluno.find(callback).limit(limit);
module.exports.getAlunoById = (id, callback) => Aluno.findById(id, callback);

// [U]pdate
module.exports.updateAluno = (id, aluno, options, callback) => {
	var query = {_id: id};
	var update = {
		nome: aluno.nome,
		email: aluno.email,
		data_nascimento: aluno.data_nascimento
	};
	Aluno.findOneAndUpdate(query, update, options, callback);
};

// [D]elete
module.exports.removeAluno = (id, callback) => {
	var query = {_id: id};
	Aluno.remove(query, callback);
};
