var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.send('Coucou');
});*/

/* GET home page. */
router.get('/move/:movement', function(req, res, next) {
  // Definir ce que l'ordinateur va jouer
  // Et renvoyer la victoire ou la defaite
  // 1 = paper
  // 2 = rock
  // 3 = scissors
  // 1 bat rock
  // 2 bat scissors
  // 3 bat paper

  let result = "victory";
  const randNumber = Math.floor((Math.random() * 3) + 1);
  switch (randNumber) {
    case 1:
      if(req.params.movement == 'rock') {
        result = "defeat";
      } else if (req.params.movement == 'paper') {
        result = "tie";
      }
      break;
    case 2:
      if(req.params.movement == 'scissors') {
        result = "defeat";
      } else if (req.params.movement == 'rock') {
        result = "tie";
      }
      break;
    case 3:
      if(req.params.movement == 'paper') {
        result = "defeat";
      } else if (req.params.movement == 'scissors') {
        result = "tie";
      }
      break;
  }
  res.send(result);
});

module.exports = router;
