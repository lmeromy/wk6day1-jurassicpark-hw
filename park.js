const Dino = require('./dino.js');

const Park = function(name, ticketprice, collection){
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

  species_array = [];
  for(let dino of dinos){
    if(dino.species === species){
      species_array.push(dino);
    }
  }
  return species_array;
};

Park.prototype.totalDailyVisitors = function(){
  const dinos = this.collection;
  visitor_counter = 0;
  for(let dino of dinos){
     visitor_counter += dino.visitors
  }
  return visitor_counter
};


//  doesn't work. Scoping issue?? assert statement issue?
Park.prototype.totalAnnualVisitors = function(){
  // version1:
  daily = this.totalDailyVisitors();
  result = daily*365;
  // version2:
  // let result = (this.totalDailyVisitors()) * 365;
  return result;
};

// this will work properly once the previous  function is working
Park.prototype.totalAnnualRevenue = function(){
  let visits = 365000 // let visits = this.totalAnnualVisitors();
  return visits * this.ticketprice;
}


module.exports = Park;
