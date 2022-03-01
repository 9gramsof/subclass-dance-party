var makeSwirlyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="src/octo.png" class="swirlyDancer"></img>');
  this.setPosition(top, left);
  // this.$node = $('<span class="dancer" id="swirlyDancer"></span>');
  // this.$node.text('<span class="dancer" id="swirlyDancer"></span>');
};

makeSwirlyDancer.prototype = Object.create(makeDancer.prototype);
makeSwirlyDancer.prototype.constructor = makeSwirlyDancer;




