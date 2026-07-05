# Assignment 4 - Theory Answers

## Q1: Props vs State

Props are data sent from a parent component to a child. The child can use it but cannot change it.

State is data a component keeps for itself. It can change, and when it changes, the component updates on screen.

Props are read-only because the parent owns that data. If the child changed it directly, the parent would not know about it, and things would go out of sync. So the parent gives the child a function instead, and the parent updates its own state when that function is called.

When to use which:
- Use props when data comes from a parent
- Use state when the component needs to change its own data, like a toggle or counter

Example:

```jsx
function Greeting(props) {
  return <h2>Hello, {props.name}</h2>;
}

function App() {
  const [name, setName] = useState("Rohan");

  return (
    <div>
      <Greeting name={name} />
      <button onClick={() => setName("Priya")}>Change Name</button>
    </div>
  );
}
```

`name` is state inside `App`. It is passed down to `Greeting` as a prop. `Greeting` just displays it, it cannot change it.

---

## Q2: useEffect, useRef, useCallback

**useEffect** runs code after the component shows on screen. Used for things like fetching data or timers.

```jsx
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed to", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

This runs every time `count` changes.

**useRef** lets you hold a value or reach a DOM element directly, without causing a re-render.

```jsx
function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={focusInput}>Click to Focus</button>
    </div>
  );
}
```

`inputRef.current` points to the actual `<input>` element on the page.

**useCallback** keeps the same function across renders instead of making a new one each time. Helpful when passing a function to a child component.

```jsx
function App() {
  const [count, setCount] = useState(0);

  const sayHello = useCallback(() => {
    console.log("Hello!");
  }, []);

  return <button onClick={sayHello}>Count: {count}</button>;
}
```

`sayHello` does not get rebuilt every time the component re-renders.
