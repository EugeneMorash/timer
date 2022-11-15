const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(() => {
      let ss = seconds % 60;
      let mm = seconds / 60 % 60;
      let hh = (seconds / 3600 % 60);
      if (seconds < 0) {
        clearInterval(timer)
        alert('Time is over!')
      } else {
        let timeSpan = `${String(Math.trunc(hh)).padStart(2, '0')}:${String(Math.trunc(mm)).padStart(2, '0')}:${String(Math.trunc(ss)).padStart(2, '0')}`
        timerEl.textContent = timeSpan;
      }
      --seconds;
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа

  inputEl.type = 'number';
});

buttonEl.addEventListener('click', () => {
  const seconds = parseInt(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
