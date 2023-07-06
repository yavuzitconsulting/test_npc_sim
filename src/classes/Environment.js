class Environment {
    constructor() {
      this.cleanliness = 100;
      this.decor = 100;
    }
  
 // Decrease cleanliness and decor over time
decayCleanliness() {
    this.cleanliness -= 0.2;
    this.decor -= 0.1;
    if (this.cleanliness < 0) {
      this.cleanliness = 0;
    }
    if (this.decor < 0) {
      this.decor = 0;
    }
  }
  
  
    // Increase cleanliness
    clean(amount) {
      this.cleanliness += amount;
      if (this.cleanliness > 100) {
        this.cleanliness = 100;
      }
    }
  
    // Add decor
    addDecor(amount) {
      this.decor += amount;
      if (this.decor > 100) {
        this.decor = 100;
      }
    }
  
    // Remove decor
    removeDecor(amount) {
      this.decor -= amount;
      if (this.decor < 0) {
        this.decor = 0;
      }
    }
  
    // Get the current state of the environment
    getState() {
      return {
        cleanliness: this.cleanliness,
        decor: this.decor,
      };
    }
  }
  
  module.exports = Environment;
  