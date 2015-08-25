var CentipedeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.steps = 0;
  this.top = top;
  this.left = left;
  this.increment = randomRange(-10, 10);
  this.direction = (Math.random() * 2) > 1 ? 'left' : 'top';
};

CentipedeDancer.prototype = Object.create(Dancer.prototype);
CentipedeDancer.prototype.constructor = CentipedeDancer;
CentipedeDancer.prototype.oldstep = Dancer.prototype.step;
CentipedeDancer.prototype.step = function() {
  this.oldStep();
  this.steps++;
  this[this.direction] += this.increment;
};
