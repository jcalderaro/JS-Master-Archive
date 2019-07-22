// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function GoT() {
    const khaleesi = "I am the Mother of Dragons!";
    console.log(`Daenerys Targaryen: ${khaleesi}`);
    debugger;
  
    function theWall() {
      const jonSnow = "I fight for Castle Black!";
      console.log(`At the wall: ${jonSnow}`);
      debugger;
  
      function westeros() {
        const tyrionLannister = "It’s hard to put a leash on a dog once you’ve put a crown on its head.";
        console.log(`To Cersei, about Joffery's bad behavior: ${tyrionLannister}`);
        debugger;
      }
      westeros();
    }
    theWall();
  }
  GoT();
  
  
  /* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */
  
  
  // ==== Challenge 2: Create a counter function ====
  const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
  };
  // Example usage: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  
  // ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
  };