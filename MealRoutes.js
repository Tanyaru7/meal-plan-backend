const { Router } = require('express');
const { getMeal, saveMeals, deletMeal, editMeals} = require('./MealController');
const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/deletMeal', deletMeal);
router.put('/editMeals', editMeals);



module.exports = router;