const NpcSim = require('./src/classes/NpcSim');
const Environment = require('./src/classes/Environment');
const TimeManager = require('./src/utils/TimeManager');
const ConsoleDisplay = require('./src/utils/ConsoleDisplay');

// Create a new AI buddy, environment, time manager, and console display
const buddy = new NpcSim();
const environment = new Environment();
const timeManager = new TimeManager();
const display = new ConsoleDisplay();

// The main loop of our simulation
function mainLoop() {
  const timestep = 0.2;
  // Advance time, 200ms are one minute in the simulation
  timeManager.advanceTime(timestep);

  // Decay the AI buddy's motives and the environment's cleanliness
  buddy.decayMotives(timestep);
  environment.decayCleanliness();

  // Get the general well-being of the AI buddy
  const generalWellBeing = buddy.getGeneralWellBeing();
  const generalStatus = buddy.getGeneralStatus();
  // Get the three most urgent motives of the AI buddy
  const mostUrgentMotives = buddy.getMostUrgentMotives();

  // Update the console display with the current state of the AI buddy and the environment
  const buddyState = buddy.getMotiveStates();
  const environmentState = environment.getState();
  display.update(`Time: ${timeManager.getCurrentTime()}\n\nAI Buddy:\n${JSON.stringify(buddyState, null, 2)}\n\nGeneral Well-being: ${generalWellBeing}\n\nGeneral Status: ${generalStatus}\n\nMost Urgent Motives: ${mostUrgentMotives.join(', ')}\n\nEnvironment:\n${JSON.stringify(environmentState, null, 2)}`);

  // Run the main loop again after a delay
  setTimeout(mainLoop, 200);
}

// Start the main loop
mainLoop();
