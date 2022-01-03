// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  //check one: any pending setTimeout, setInterval, setImmediate?
  //check two: any pending OS tasks? (like server listening to port)
  //check three: any pending long runnig operations (like fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// entire body executes in one 'tick'
while(shouldContinue()) {
  // 1) node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval

  // 2) node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

  // 3) pause execution. Continue when...
  // - a new pengindOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete

  // 4) look at pengingTimers. Call any setImmediate

  // 5) handle any close events
}



// exit back to terminal