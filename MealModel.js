const mongoose = require('mongoose');
const MealSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    }
})


module.exports = mongoose.model ('Meal', MealSchema);
