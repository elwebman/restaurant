$(document).on("click", "input", function()
{
  $("#pizzawrapper").toggleClass("hidden");
});

$(document).ready(function(){

    var rotation = function (){
      $("#pizzaimg").rotate({
        angle:0,
        animateTo:360,
        callback: rotation,
        easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
        return c*(t/d)+b;
        }
      });
    };
    rotation();

});
