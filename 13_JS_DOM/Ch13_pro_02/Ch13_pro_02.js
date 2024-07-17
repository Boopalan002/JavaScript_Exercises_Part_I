
function changeYearColor() {
    const yearHeader = document.querySelector('h1');
    setInterval(() => {
      const randomColor = getRandomColor();
      yearHeader.style.color = randomColor;
    }, 1000);
  }
  
  
  function changeDateTimeBackground() {
    const dateTimeSection = document.querySelector('.wrapper');
    setInterval(() => {
      const randomColor = getRandomColor();
      dateTimeSection.style.backgroundColor = randomColor;
    }, 1000);
  }
  
 
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  changeYearColor();
  changeDateTimeBackground();
  