var makeSwirlyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer" id="swirlyDancer"></span>');
};

makeSwirlyDancer.prototype = Object.create(makeDancer.prototype);
makeSwirlyDancer.prototype.constructor = makeSwirlyDancer;


//makeSwirlyDancer.prototype.step = function() {
  //makeDancer.prototype.step.call(this);
  //this.$node.toggle();
//};
// makeSwirlyDancer.prototype.oldStep = makeDancer.prototype.step;

// makeSwirlyDancer.prototype.step = function() {
//   //makeDancer.prototype.step.call(this);
//   //this.$node.toggle();
// //make it swirl
// };


// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
// };

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

// makeBlinkyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };


