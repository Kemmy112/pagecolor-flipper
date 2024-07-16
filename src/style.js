const myBody = document.querySelector('body');

const myHues = [ "white" , "blue", "pink", "red", "purple" , "orange" , "yellow" , "aqua" , "green"];

const toggle = document.getElementById('clik-btn');

const reset = document.getElementById('reset');

myBody.style.backgroundColor = 'green';

toggle.addEventListener("click", function() {

    const colorWheel = parseInt(Math.random() *myHues.length);
    myBody.style.backgroundColor = myHues[colorWheel];
});

reset.addEventListener("click", function() {
     const reVerb = myBody.value;
     
     myBody.value = "black";

     myBody.style.backgroundColor = reVerb;

});