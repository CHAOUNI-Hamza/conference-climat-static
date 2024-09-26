document.addEventListener("DOMContentLoaded", function() {
  const countdown = document.getElementById('countdown');

  if (countdown) {
      function startCountdown(endTime) {
          const timer = setInterval(() => {
              const now = new Date().getTime();
              const distance = endTime - now;

              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);

              updateFlipClock(days, hours, minutes, seconds);

              if (distance < 0) {
                  clearInterval(timer);
                  countdown.innerHTML = "EXPIRED";
              }
          }, 1000);
      }

      function updateFlipClock(days, hours, minutes, seconds) {
          const flipElements = [days, hours, minutes, seconds];
          
          flipElements.forEach((value, index) => {
              const flipClock = countdown.querySelectorAll('.flip-clock')[index];
              const currentSpan = flipClock.querySelector('span');
              
              if (currentSpan.textContent !== value.toString()) {
                  flipClock.classList.add('flip');
                  setTimeout(() => {
                      currentSpan.textContent = value;
                      flipClock.classList.remove('flip');
                  }, 300); // Durée de transition correspondant à l'animation CSS
              }
          });
      }

      // Date de fin du compte à rebours (ex: 31 décembre 2024 à minuit)
      const countdownDate = new Date("2024-12-31T00:00:00").getTime();
      startCountdown(countdownDate);
  }
});
