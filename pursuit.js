function createStartButton (){
  let startButton = document.createElement("button");
  startButton.innerHTML = "Start";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

  button.addEventListener("click", function goToGame(){
    window.location.href = "pursuit.html";
  })
}
