class Counter {
  constructor() {
    this.count = 0;
    this.displayCount = document.getElementById('count');
  }

  decreaseCount() {
    this.count--;
    this.#updateCount();
  }

  increaseCount() {
    this.count++;
    this.#updateCount();
  }

  resetCount() {
    this.count = 0;
    this.#updateCount();
  }

  #updateCount() {
    this.displayCount.textContent = this.count;

    if (this.count < 0) this.displayCount.style.color = 'red';
    else if (this.count > 0) this.displayCount.style.color = 'green';
    else this.displayCount.style.color = 'black';
  }
}

export default Counter;
