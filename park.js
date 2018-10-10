const Dino = require('./dino.js');

const Park = function(name, ticketprice, collection){  // do not need to initialize with dino array!
  this.name = name;
  this.ticketprice = ticketprice;
  this.collection = [];
};


Park.prototype.addDino = function (dino) {
  this.collection.push(dino);
};

Park.prototype.removeDino = function(dino) {
  let pos = this.collection.indexOf(dino)
  this.collection.splice(pos, 1);
  // starts at index of dino, removes 1 element
  // can I do shift instead??
};


Park.prototype.findPopularDino = function(){
  const dinos = this.collection;

  let highest = dinos[0];

  for(let dino of dinos){
    if (dino.visitors > highest.visitors){
      highest = dino;
    }
  }
  return highest
};

Park.prototype.findDinoSpecies = function(species){
  const dinos = this.collection;

  let species_array = [];
  for(let dino of dinos){
    if(dino.species.toLowerCase() === species.toLowerCase()){
      species_array.push(dino);
    }
  }
  return species_array;
};

Park.prototype.totalDailyVisitors = function(){
  const dinos = this.collection;
  let visitor_counter = 0;
  for(let dino of dinos){
     visitor_counter += dino.visitors
  }
  return visitor_counter;
};


Park.prototype.totalAnnualVisitors = function(){
  return this.totalDailyVisitors() * 365;
};


Park.prototype.totalAnnualRevenue = function(){
  return this.totalAnnualVisitors() * this.ticketprice;
};

// extensions

Park.prototype.killAll = function(species){
  // loop backwards!!! b/c of mutating arrays in javascript....if going front to back, then the index is messed up in js internal counter
  for(let i = this.collection.length -1; i >=0; i--){
    let currentDino = this.collection[i];
    if(currentDino.species.toLowerCase() === species.toLowerCase()){
      this.collection.splice(i, 1);
    }
  }
};

Park.prototype.get_diets = function () {
   // create empty object
   let diets = {};
  // loop thru dinos, check if key is
  for(let dino of this.collection){
    if(dino.diet in diets){
      diets[dino.diet]++;
    }else{
      diets[dino.diet] = 1;
    }
  }
  return diets;
};

module.exports = Park;
