class Environment {
  constructor() {
    this.cleanliness = 100;
    this.decor = 100;
    this.cleanlinessDecayRate = 0.2; // This will now represent the decay rate per hour
    this.decorDecayRate = 0.1; // This will now represent the decay rate per hour
  }

  // Decay the cleanliness and decor over time
  decayCleanliness(timePassed) {
    this.cleanliness -= this.cleanlinessDecayRate * timePassed;
    this.decor -= this.decorDecayRate * timePassed;
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
    let cleanlinessState;
    let decorState;

    if (this.cleanliness <= 20) {
      cleanlinessState = `Very dirty (${this.cleanliness})`;
    } else if (this.cleanliness <= 50) {
      cleanlinessState = `Dirty (${this.cleanliness})`;
    } else {
      cleanlinessState = `Clean (${this.cleanliness})`;
    }

    if (this.decor <= 20) {
      decorState = `Very poor decor (${this.decor})`;
    } else if (this.decor <= 50) {
      decorState = `Poor decor (${this.decor})`;
    } else {
      decorState = `Nice decor (${this.decor})`;
    }

    return {
      cleanliness: cleanlinessState,
      decor: decorState,
    };
  }
}

module.exports = Environment;
