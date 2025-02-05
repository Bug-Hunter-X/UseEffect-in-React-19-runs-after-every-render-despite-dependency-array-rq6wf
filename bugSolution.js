```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const memoizedValue = useMemo(() => {
    // Perform expensive calculations here
      return count * 2;
  }, [count]);

  useEffect(() => {
    console.log('Component rendered with count:', count);
    // Perform side effects here using memoizedValue
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Memoized value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```