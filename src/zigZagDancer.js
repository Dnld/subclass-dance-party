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
  
  var range = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10];
  
  this.top = this.top + range[Math.floor(Math.random() * 21)];
  this.left = this.left + range[Math.floor(Math.random() * 21)];
  // set position with top and left
  
  this.setPosition(this.top, this.left);
  
  // show the node
  this.$node.show();
};
