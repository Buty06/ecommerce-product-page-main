const counter = document.getElementById("count_number");
const countLess = document.getElementById("count_less");
const countPlus = document.getElementById("count_plus");
const addCart = document.getElementById("description_cart");
const storeCart = document.getElementById("store_cart");
const value = document.getElementById("value");

const plusAndLess = () => {
  countLess.addEventListener("click", () => {
    if (counter.textContent >= 1) {
      counter.textContent--;
    }
  });

  countPlus.addEventListener("click", () => {
    counter.textContent++;
  });
};

plusAndLess();

const showPurchaseValue = () => {
  addCart.addEventListener("click", () => {
    if (counter.textContent >= 1) {
      value.style.display = "block";
      value.textContent = counter.textContent;
    }
  });
};

showPurchaseValue();
