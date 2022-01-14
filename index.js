// Im a child
const express = require('express');
const crypto = require('crypto');
const app = express();
const { Worker } = require('worker_threads');

app.get('/', (req, res) => {
  const worker = new Worker(
    `() => { this.on("message", () => {
        let counter = 0;
        while(counter < 10) {
          counter++;
        }

        console.log(counter);

        postMessage('counter');
      }
    ) }`, { eval: true }
  );
  

  worker.on("message", (myCounter) => {
    console.log(myCounter);
  });

  worker.postMessage('123');
});

app.get('/fast', (req, res) => {
  res.send('This was fast');
});

app.listen(3000);
