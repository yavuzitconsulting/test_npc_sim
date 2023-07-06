class Motive {
    constructor(name, decayRate, importance) {
      this.name = name;
      this.value = 100;
      this.decayRate = decayRate;
      this.importance = importance;
    }
  
  // Decay the motive over time
  decay(timePassed) {
    this.value -= this.decayRate * timePassed;
    if (this.value < -100) {
      this.value = -100;
    }
  }
  
    // Fulfill the motive
    fulfill(amount) {
      this.value += amount;
      if (this.value > 100) {
        this.value = 100;
      }
    }
  

  // Get the current state of the motive
  getState() {
    if (this.value <= -80) {
      return `Very low ${this.name} (${this.value})`;
    } else if (this.value <= -50) {
      return `Low ${this.name} (${this.value})`;
    } else if (this.value <= -20) {
      return `${this.name} is decreasing (${this.value})`;
    } else if (this.value <= 0) {
      return `${this.name} is nagging (${this.value})`;
    } else if (this.value <= 50) {
      return `${this.name} is okay (${this.value})`;
    } else {
      return `${this.name} is good (${this.value})`;
    }
  }
  
    // Sigmoid function
    sigmoid(x) {
      return 1 / (1 + Math.exp(-x));
    }
  
    // Get the multiplier for the motive
    getMultiplier() {
      // Adjust the sigmoid function based on the importance of the motive
      return this.sigmoid(this.value / this.importance);
    }
  
    // Get the weighted value of the motive
    getWeightedValue() {
      return this.value * this.getMultiplier();
    }
  }
  
  module.exports = Motive;
  