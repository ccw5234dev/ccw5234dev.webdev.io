

createDefaultHappinessBar();


function createDefaultHappinessBar(){
  var canvas = document.getElementById('canvas');
  if(canvas.getContext){
    var context = canvas.getContext('2d');
    var gradient = context.createLinearGradient(0,0,100,0);
    gradient.addColorStop(0,"black");
    gradient.addColorStop(1, "yellow");

    context.fillStyle = gradient;

    context.fillRect(20,20,100,100);
    context.clearRect(40,40,60,60);
    context.strokeRect(10,10,5,5);
    context.rotate(20* Math.PI / 90);
  }
}
