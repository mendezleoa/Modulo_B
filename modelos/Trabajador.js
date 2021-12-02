const { Schema, model } = require('mongoose');

const trabajadoresSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    cargo: {
        type: String,
        required: true
    },
    especializacion: {
        type: Number,
        required: true
    },
    disponible: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = model('Trabajadores', trabajadoresSchema);