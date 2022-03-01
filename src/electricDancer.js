var makeElectricDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="src/jellyfish.png" class="electricDancer"></img>');
  this.setPosition(top, left);
};

makeElectricDancer.prototype = Object.create(makeDancer.prototype);
makeElectricDancer.prototype.constructor = makeElectricDancer;

