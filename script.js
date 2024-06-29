const febHolidays = [
    "Dear , KOMAL",
    "First of all, Many Many return of the day❤️",
    "There are some wishes for you",
   " Happy birthday to my amazing best friend! 🎉",
    "Wishing you a day as beautiful and special as you are",

    "May all your dreams and wishes come true this year and beyond. " ,
    "Here's to more laughter, more adventures, and more amazing memories together!",
    "You deserve all the love, happiness, and success in the world. ",
    "Cheers to celebrating you and our incredible friendship!",
    "May  your birthday be filled with joy, laughter, and unforgettable moments.",
    "Sending you lots of love and best wishes on your special day",
    "Celebrate today and every day knowing how cherished you are.",
    "Happy birthday to my dear friend who brightens my life!",
     "May this year bring you endless opportunities and blessings.",
     "Here's to health, happiness, and all the good things in life!",
    "Your friendship means everything to me. Thank you for being you.",
    "Enjoy every moment of your birthday celebration to the fullest.",
     "Cheers to another year of laughter, friendship, and love.",
    "Wishing you good health, success, and happiness always.",
    "May your birthday be the beginning of a wonderful year ahead.",
    "Thank you for being such an incredible friend and companion.",
    "Here's to another year of being fabulous together!",
    "Sending you positive vibes and lots of smiles on your special day.",
    "May your birthday be filled with love, laughter, and cherished moments.",
    "You deserve the world and more. Happy birthday, dear friend!",
    "Wishing you a day as amazing and special as you are to me.",
    "Happy birthday! Let's make this day unforgettable and amazing.",
    "Cheers to another year of growth, strength, and wonderful memories.",
    "May your birthday be as sweet as you are and as joyful as your laughter.",
    "Wishing you success and fulfillment in everything you do.",
    "Here's to another 365 days of happiness and adventures.",
    "Happy birthday to someone who makes life brighter and more beautiful.",
    "May your birthday bring you as much happiness as you bring to others.",
   "Celebrate today with all the joy and excitement you deserve!",
    "Happy birthday! You're not just getting older, you're becoming more amazing.",
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2024-07-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  