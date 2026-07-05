function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    },
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log("Counter value:", counter.getValue()); // 2
console.log(counter.count);

const products = [
  { name: "Notebook", price: 60, category: "Stationery" },
  { name: "Bluetooth Earphones", price: 1200, category: "Electronics" },
  { name: "Steel Water Bottle", price: 350, category: "Kitchenware" },
  { name: "Wireless Mouse", price: 650, category: "Electronics" },
  { name: "Pen Set", price: 150, category: "Stationery" },
  { name: "Backpack", price: 900, category: "Accessories" },
];

const cheapProductNames = products
  .filter((product) => product.price < 500)
  .map((product) => product.name);

console.log("Products under ₹500:", cheapProductNames);

function totalPriceByCategory(productList, category) {
  return productList
    .filter((product) => product.category === category)
    .reduce((total, product) => total + product.price, 0);
}

console.log(
  "Total price of Electronics:",
  totalPriceByCategory(products, "Electronics"),
);
