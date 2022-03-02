describe('swirlyDancer', function() {

  var swirlyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    swirlyDancer = new makeSwirlyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(swirlyDancer.$node).to.be.an.instanceof(jQuery);
  });
});
