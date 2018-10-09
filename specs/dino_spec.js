const assert = require('assert');
const Dino = require('../dino.js');


describe ('Dino', function(){

  let dino;

  beforeEach(function(){
    dino = new Dino('Pterodactyl', 'carnivore', 100);
  });

  it('should specify a species', function(){
    const actual = dino.species;
    assert.strictEqual(actual, 'Pterodactyl');
  });

  it('should specify a diet', function(){
    const actual = dino.diet;
    assert.strictEqual(actual, 'carnivore');
  });

  it('should have an avg number of daily visitors', function(){
    const actual = dino.visitors;
    assert.strictEqual(actual, 100)
  });

});
