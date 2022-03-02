describe('electricDancer', function() {

  var electricDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    electricDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(electricDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(electricDancer.$node, 'toggle');
    electricDancer.step();
    expect(electricDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(electricDancer, 'step');
      expect(electricDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      // clock.tick(timeBetweenSteps);

      expect(electricDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(electricDancer.step.callCount).to.be.equal(2);
    });
  });
});
