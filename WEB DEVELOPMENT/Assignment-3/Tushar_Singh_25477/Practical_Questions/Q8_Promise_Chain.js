function delayedGreeting(name, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name) {
        reject("Name is required");
      } else {
        resolve(`Hello, ${name}!`);
      }
    }, ms);
  });
}

delayedGreeting("Anjali", 1000)
  .then((message) => {
    console.log(message);
    return delayedGreeting("Rahul", 1000);
  })
  .then((message) => {
    console.log(message);
    return delayedGreeting("", 1000);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Error caught:", error);
  })
  .finally(() => {
    console.log("Done");
  });
