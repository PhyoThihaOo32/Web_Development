console.log('----------------- ASYNC BASICS & THE EVENT LOOP -----------------');

// JavaScript is single-threaded — it runs one thing at a time.
// But it can SCHEDULE work to happen later without blocking the rest of your code.
//
// The key players:
//   Call Stack    — where your synchronous (normal) code runs, right now
//   Web APIs      — browser features (timers, fetch) that run outside the stack
//   Callback Queue — where callbacks wait after their async work finishes
//   Event Loop    — moves callbacks from the queue to the stack when the stack is empty
//
// The golden rule: ALL synchronous code runs first.
//                  Async callbacks only run after the current stack is clear.

//----------------------------------------------------
console.log('\n--- Problem 1: Predict the output order ---');

// Before running this code, read it and write down what you expect the output to be.
// Then uncomment the block and run it. Were you right?
//
// Ask yourself:
//   - Which lines run immediately (synchronous)?
//   - Which lines are delayed (inside setTimeout)?
//   - Does the delay amount change which async callback runs first?

/*
console.log('start');

setTimeout(() => {
  console.log('timeout A — 1000ms');
}, 1000);

setTimeout(() => {
  console.log('timeout B — 0ms');
}, 0);

console.log('end');
*/

// Write your predicted output here as a comment before running:
// Line 1: 'start'
// Line 2: 'end
// Line 3: 'timeout B — 0ms'
// Line 4: 'timeout A — 1000ms'

//----------------------------------------------------
console.log('\n--- Problem 2: delayedGreeting ---');

// Write a function called delayedGreeting(name, ms, callback).
// After `ms` milliseconds, it should call callback with a greeting string.
// The greeting format is: "Hello, <name>! Nice to meet you."
//
// Think:
//   - What async tool schedules something to happen after a delay?
//   - The callback should receive the greeting string, not log it directly.
//     Who decides what to DO with the greeting? The caller, not this function.
function delayedGreeting(name, ms, callback) {
  setTimeout(() => {
    callback(`Hello, ${name}! Nice to meet you.`)
  }, ms);
}

// When implemented, this should log the greeting after ~1 second:
delayedGreeting('Taylor', 1000, (greeting) => {
  console.log(greeting); // "Hello, Taylor! Nice to meet you." (after 1s)
});

console.log('This logs before the greeting, even though it comes after in the file.');

//----------------------------------------------------
console.log('\n--- Problem 3: asyncCountdown ---');

// Write asyncCountdown(n) — it should log n, n-1, ..., 1, one per second,
// then log "Done!" after the last number.
//
// Think:
//   - What tool runs a callback on a repeating interval?
//   - How do you stop it? (clearInterval — you'll need to save the id it returns)
//   - How do you track which number to log next? (a variable outside the callback)
//
// Hint: you need a variable to track the current number,
//       and another variable to hold the interval id so you can clear it.
function asyncCountdown(n) {
  const id = setInterval(() => {
    if (n === 0) {
      clearInterval(id)
      console.log('Done!')
      return 
    }

    console.log(n)
    n -= 1

  }, 1000);
}

// Expected output (one per second):
// 3
// 2
// 1
// Done!
asyncCountdown(3);

//----------------------------------------------------
console.log('\n--- Problem 4: fetchUser (simulated async) ---');

// In the real world, fetching data from a server takes time — it's async.
// We simulate that delay with setTimeout.
//
// Write fetchUser(userId, onSuccess, onError).
//   - After a 1-second delay, check the userId:
//       - If userId is a positive number, call onSuccess with a fake user object:
//         { id: userId, name: 'Student #<userId>', enrolled: true }
//       - If userId is NOT a positive number (0, negative, or non-number),
//         call onError with the message: "Invalid user ID"
//
// Think:
//   - This function does not return anything — it communicates through its callbacks.
//   - onSuccess and onError are callbacks: you call ONE of them (not both) when done.
//
// Hint: typeof userId === 'number' && userId > 0

function fetchUser(userId, onSuccess, onError) {
  setTimeout(() => {
    if (userId > 0) {
      onSuccess({ id: userId, name: userId, enrolled: true })
    } else {
      onError('Invalid user ID')
    }
  }, 1000);
}

// Test case 1 — valid user (should call onSuccess after 1s)
fetchUser(
  42,
  (user) => console.log('Success:', user),
  (err)  => console.log('Error:', err)
);
// Expected: Success: { id: 42, name: 'Student #42', enrolled: true }

// Test case 2 — invalid id (should call onError after 1s)
fetchUser(
  -1,
  (user) => console.log('Success:', user),
  (err)  => console.log('Error:', err)
);
// Expected: Error: "Invalid user ID"

//----------------------------------------------------
console.log('\n--- Problem 5 (Challenge): sequentialDelays ---');

// This one is harder — think it through before writing code.
//
// Write sequentialDelays(messages, delayMs).
//   - messages is an array of strings.
//   - Log each message one at a time, separated by delayMs milliseconds.
//   - So message[0] logs after delayMs, message[1] after 2*delayMs, etc.
//
// Example: sequentialDelays(['go', 'set', 'ready'], 1000)
//   logs 'go'    after 1s
//   logs 'set'   after 2s
//   logs 'ready' after 3s
//
// Hint: you can give each setTimeout a different delay.
//       Think about how the delay for message at index i relates to i and delayMs.
//       (You do NOT need setInterval for this one.)

function sequentialDelays(messages, delayMs) {
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    setTimeout(() => {
      console.log(msg)
    }, delayMs)
  }
}

sequentialDelays(['ready', 'set', 'go!'], 800);
// 'ready' (after 0.8s)
// 'set'   (after 1.6s)
// 'go!'   (after 2.4s)
