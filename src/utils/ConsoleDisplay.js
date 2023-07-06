class ConsoleDisplay {
    constructor() {
      this.display = '';
    }
  
    // Update the display with new content
    update(content) {
      this.clear();
      this.display = content;
      this.render();
    }
  
    // Clear the display
    clear() {
      process.stdout.write('\x1Bc');
    }
  
    // Render the display
    render() {
      console.log(this.display);
    }
  }
  
  module.exports = ConsoleDisplay;
  