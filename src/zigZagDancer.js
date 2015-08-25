var ZigZagDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
};

ZigZagDancer.prototype = Object.create(Dancer.prototype);
ZigZagDancer.prototype.constructor = ZigZagDancer;
ZigZagDancer.prototype.oldStep = Dancer.prototype.step;
ZigZagDancer.prototype.step = function() {
  this.oldStep();
  
  // hide the existing node
  this.$node.hide();
  // calculate new top and left

  var randomRange = function(minNum, maxNum){
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  };
  
  this.top = this.top + randomRange(-10, 10);
  this.left = this.left + randomRange(-10, 10);
  // set position with top and left
  
  this.setPosition(this.top, this.left);
  
  // show the node
  this.$node.show();
};
