var ZigZagDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('dancer-2');
};

ZigZagDancer.prototype = Object.create(Dancer.prototype);
ZigZagDancer.prototype.constructor = ZigZagDancer;
ZigZagDancer.prototype.oldStep = Dancer.prototype.step;
ZigZagDancer.prototype.step = function() {
  this.oldStep();
  // calculate new top and left

  var randomRange = function(minNum, maxNum){
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  };
  
  this.top = this.top + randomRange(-10, 10);
  this.left = this.left + randomRange(-10, 10);
  // set position with top and left
  this.setPosition(this.top, this.left);
};
