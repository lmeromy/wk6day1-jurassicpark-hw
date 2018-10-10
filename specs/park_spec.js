const assert = require('assert');
const Dino = require('../dino.js'); // constructor function
const Park = require('../park.js'); // constructor function

describe ('Park', function(){

  let park;

  beforeEach(function(){
    // should I be using 'let' in fron of my variables here?
    dino1 = new Dino('Stegosaurus', 'carnivore', 500);
    dino2 = new Dino('Triceratops', 'herbivore', 300);
    dino3 = new Dino('Oviraptor', 'omnivore', 200);
    // dino4 = new Dino('Velociraptor', 'carnivore', 400);
    dinos = [];
    park = new Park('Dinoland', 8, dinos);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dinoland');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketprice;
    assert.strictEqual(actual, 8);

  });

  it('should have a dino collection', function(){
    const actual = park.collection;
    assert.deepStrictEqual(actual, dinos);
  });


  describe ('Park functions', function(){

    it('should be able to add a dino to collection', function(){
      park.addDino(dino1);
      const actual = park.collection.length;
      assert.strictEqual(actual, 1);
    });

    it('should be able to remove a specific dino', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      park.removeDino(dino2);
      const actual = [dino1, dino3];
      const expected = park.collection;
      assert.deepStrictEqual(actual, expected);
    });

    it('should be able to find dino that attracts the most visitors', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      const actual = park.findPopularDino();
      assert.strictEqual(actual, dino1)
    });

    it('should be able to find all dinos of a particular species', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      const actual = park.findDinoSpecies('stegosaurus');
      const expected = [dino1];
      assert.deepStrictEqual(actual, expected)
    });

    it('should be able to calculate total number of visitors per day', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      const actual = park.totalDailyVisitors();
      assert.strictEqual(actual, 1000);
    });

    it('should be able to Calculate total number of visitors per year', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      const actual = park.totalAnnualVisitors();
      assert.strictEqual(actual, 365000);
    });

    it('should be able to Calculate the total revenue from ticket sales for one year', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      const actual = park.totalAnnualRevenue();
      assert.strictEqual(actual, 2920000);
    });

    // extensions

    it('should delete all dinos of particualr species', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      park.killAll('stegosaurus');
      assert.strictEqual(2, park.collection.length);
    });

    it('should collate info about dinos and their diets', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      actual = park.get_diets();
      expected = {
        carnivore: 1,
        herbivore: 1,
        omnivore: 1
      };
      assert.deepStrictEqual(actual, expected)

    });

  });


});
