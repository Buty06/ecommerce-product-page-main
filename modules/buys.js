const counter = document.getElementById("count_number");
const countLess = document.getElementById("count_less");
const countPlus = document.getElementById("count_plus");

const plusAndLess = () => {
  countLess.addEventListener("click", () => {
    if (counter.textContent >= 1) {
      counter.textContent--;
    }
  });

  countPlus.addEventListener("click", () => {
    counter.textContent++;
  });

  return counter;
};

plusAndLess();
