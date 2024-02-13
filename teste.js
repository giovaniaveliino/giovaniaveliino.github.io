document.addEventListener("DOMContentLoaded", function() {
    const animationContainer = document.querySelector(".animation-container");
    const screenWidth = window.innerWidth; 
    let animationPaused = false;


    function startAnimation() {
        if (!animationPaused) {
            for (let i = 0; i < 500; i++) {
                const number = document.createElement("div");
                number.className = "falling-numbers";
                number.style.left = Math.random() * screenWidth + "px"; 
                number.style.top = Math.random() * window.innerHeight + "px";
                number.style.animationDuration = Math.random() * 5 + 2 + "s";
                number.textContent = Math.random() < 0.3 ? "0" : "1";
             
                if (i % 2 === 0) {
                    number.classList.add("blue-number"); 
                } else {
                    number.classList.add("red-number"); 
                }

                animationContainer.appendChild(number);
            }
        }
    }

  
    startAnimation();

 
    const pauseButton = document.getElementById("pauseButton");
    const resumeButton = document.getElementById("resumeButton");

 
    pauseButton.addEventListener("click", function() {
       
        const fallingNumbers = document.querySelectorAll(".falling-numbers");
        fallingNumbers.forEach(function(number) {
            number.style.animationPlayState = "paused";
        });
    });
  
    pauseButton.addEventListener("mouseout", function() {

        const fallingNumbers = document.querySelectorAll(".falling-numbers");
        fallingNumbers.forEach(function(number) {
            number.style.animationPlayState = "running";
        });
    });


  
    resumeButton.addEventListener("click", function() {
        animationPaused = false;
        startAnimation();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const colorChangeButton = document.getElementById("colorChangeButton");

    colorChangeButton.addEventListener("click", function() {
        const numbersToChange = document.querySelectorAll(".falling-numbers");
        numbersToChange.forEach(function(number) {
            number.classList.toggle("green-number");
        });
    });
});
