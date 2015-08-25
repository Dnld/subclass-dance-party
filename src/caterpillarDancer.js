var CaterpillarDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.steps = 0;
  this.top = top;
  this.left = left;
  var randomRange = function(minNum, maxNum){
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  };
  this.increment = randomRange(-10, 10);
  this.direction = (Math.random() * 2) > 1 ? 'left' : 'top';
  this.$node.removeClass('dancer');
  this.$node.addClass('dancer-3');
  this.$node.append('<img src="src/Caterpie.png" height= "50" width= "50"></img>');
};

CaterpillarDancer.prototype = Object.create(Dancer.prototype);
CaterpillarDancer.prototype.constructor = CaterpillarDancer;
CaterpillarDancer.prototype.oldStep = Dancer.prototype.step;
CaterpillarDancer.prototype.step = function() {
  this.oldStep();

  this.steps++;
  this[this.direction] += this.increment;
  this.setPosition(this.top, this.left);
};
