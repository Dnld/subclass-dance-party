$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineUpDancersButton").on("click", function(event) {
    var firstDancer = Math.floor(Math.random() * window.dancers.length);
    var secondDancer = Math.floor(Math.random() * window.dancers.length);
    
    for (var i = 0; i < window.dancers.length; i++) {
      if (i === firstDancer) {
        window.dancers[i].left = $("body").width() / 2 + 50;
        window.dancers[i].top = $("body").height() / 2;
      } else if (i === secondDancer) {
        window.dancers[i].left = $("body").width() / 2;
        window.dancers[i].top = $("body").height() / 2 + 50;
      } else if (i % 2 === 0) {
        window.dancers[i].left = 50;
      } else {
        window.dancers[i].left = $("body").width() - 80;
      }
      window.dancers[i].setPosition(window.dancers[i].top, 
      window.dancers[i].left);
    }
  });

// pairDancerButton incomplete
  // $(".pairDancerButton").on("click", function(event){
  //   for(var i = 0; i < window.dancers.length; i++){
  //     var newHeight = $("body").height() * Math.random();
  //     var newWidth = $("body").width() * Math.random();
  //     var constructor1 = window.dancers[i].constructor;
  //     var timeBetweenSteps1 = window.dancers[i].timeBetweenSteps;
      // var dancer = window.dancers[i].$node;
      // $('body').remove(dancer.$node);
      // delete window.dancers[i];
      // if(constructor1 === BlinkyDancer){
      //   var newBlinky = new BlinkyDancer(newHeight, newWidth, timeBetweenSteps1);
      //   $("body").append(newBlinky.$node);
      //   window.dancers.splice(i, 1, newBlinky);
      // }else if(constructor1 === ZigZagDancer){
      //   var newZigZag = new ZigZagDancer(newHeight, newWidth, timeBetweenSteps1);
      //   $("body").append(newZigZag.$node);
      //   window.dancers.splice(i, 1, newZigZag);
      // }else{
      //   var newCaterpillar = new CaterpillarDancer(newHeight, newWidth, timeBetweenSteps1);
      //   $("body").append(newCaterpillar.$node);
      //   window.dancers.splice(i, 1, newCaterpillar);
      // }

      // window.dancers[i].setPosition(newHeight, newWidth);
      // window.dancers[++i].setPosition(newHeight, newWidth);
  //   }
  // });

});

