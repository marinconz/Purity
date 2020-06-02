const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    NOMBRE: {type: String},
    CLASIFICACIÓN: {type: String},
    DESCRIPCIÓN: {type: String}
});

module.exports = mongoose.model('Ingredient', ingredientSchema)