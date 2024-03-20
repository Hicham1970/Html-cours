/** Etape 2:
 * Now, let's create our web worker in an external JavaScript.
Here, we create a script that counts. The script is stored in the "demo_workers.js" file:
 */

let i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()", 500);
}

timedCount();

/**
 * The important part of the code above is the postMessage() method - which is used to post a message back to the HTML page.
 */
