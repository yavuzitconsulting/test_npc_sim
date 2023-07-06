class TimeManager {
    constructor() {
      this.time = 0; // This will now represent hours in the simulation
      this.day = 0;
    }
  
    // Advance time by a certain amount (in hours)
    advanceTime(amount) {
      this.time += amount;
      if (this.time >= 24) { // 24 hours in a day
        this.time -= 24;
        this.day++;
      }
    }
  
    // Get the current time
    getCurrentTime() {
      let hours = Math.floor(this.time);
      let minutes = (this.time - hours) * 60;
      // Round minutes to the nearest whole number
      minutes = Math.round(minutes);
      // Pad the hours and minutes with leading zeros if necessary
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return `Day ${this.day}, ${hours}:${minutes}`;
    }
  }
  
  module.exports = TimeManager;
  