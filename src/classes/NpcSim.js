const Motive = require('./Motive');

class NpcSim {
  constructor() {
    this.motives = {
      hunger: new Motive('Hunger', 0.5, 1),
      thirst: new Motive('Thirst', 0.5, 1),
      comfort: new Motive('Comfort', 0.3, 0.8),
      social: new Motive('Social', 0.2, 0.6),
      hygiene: new Motive('Hygiene', 0.3, 0.7),
      fun: new Motive('Fun', 0.2, 0.6),
      environment: new Motive('Environment', 0.1, 0.5),
      energy: new Motive('Energy', 0.4, 0.9),
      bladder: new Motive('Bladder', 0.5, 0.8),
      sunlight: new Motive('Sunlight', 0.1, 0.4),
    };
  }

// Decay all motives over time
decayMotives(timePassed) {
  for (let motive in this.motives) {
    this.motives[motive].decay(timePassed);
  }
}

  // Get the current state of all motives
  getMotiveStates() {
    let states = {};
    for (let motive in this.motives) {
      states[motive] = this.motives[motive].getState();
    }
    return states;
  }

  // Fulfill a specific motive
  fulfillMotive(motiveName, amount) {
    if (this.motives[motiveName]) {
      this.motives[motiveName].fulfill(amount);
    }
  }
  
 // Get the general well-being of the AI buddy
 getGeneralWellBeing() {
    let totalWeightedValue = 0;
    let totalImportance = 0;
    for (let motiveName in this.motives) {
      const motive = this.motives[motiveName];
      totalWeightedValue += motive.getWeightedValue();
      totalImportance += motive.importance;
    }
    // Normalize the total weighted value by the number of motives
    return totalWeightedValue / Object.keys(this.motives).length;
  }

  // Get the general status of the AI buddy
  getGeneralStatus() {
    const wellBeing = this.getGeneralWellBeing();
    if (wellBeing <= -80) {
      return `Very low well-being (${wellBeing})`;
    } else if (wellBeing <= -50) {
      return `Low well-being (${wellBeing})`;
    } else if (wellBeing <= -20) {
      return `Well-being is decreasing (${wellBeing})`;
    } else if (wellBeing <= 0) {
      return `Well-being is nagging (${wellBeing})`;
    } else if (wellBeing <= 50) {
      return `Well-being is okay (${wellBeing})`;
    } else {
      return `Well-being is good (${wellBeing})`;
    }
  }

    // Get the three most urgent motives
    getMostUrgentMotives() {
        // Convert the motives object to an array of [motiveName, motive] pairs
        const motivesArray = Object.entries(this.motives);
    
        // Sort the array by the weighted value of the motives in ascending order
        motivesArray.sort(([, motiveA], [, motiveB]) => motiveA.getWeightedValue() - motiveB.getWeightedValue());
    
        // Return the names of the first three motives in the sorted array
        return motivesArray.slice(0, 3).map(([motiveName]) => motiveName);
      }
    
}

module.exports = NpcSim;
