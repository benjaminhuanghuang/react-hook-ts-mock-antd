
# React Hook (React 16.8)

## useState
```

```
## useEffect
- What is side effects: 
Side effects are basically anything that affects something outside of the scope of the current function that’s being executed. That includes: API requests, Error tracking

```
  useEffect( ()=>{dothing...}, [] )
```
useEffect 的第一个参数类型是 React.EffectCallback
By dafault, EffectCallback 会在每次渲染后执行

- Remove event handler
```
  useEffect(() => {
    const updatePos = (e: MouseEvent) => {
      console.log('upate pos')
      setPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updatePos);
    // 每次渲染前会clean前一个effect
    return () => {
      document.removeEventListener("click", updatePos);
    };
  });
```
- Only first loading
```
  useEffect( ()=>{dothing...}, [] )
```
- When state change
```
  useEffect( ()=>{dothing...}, [state] )
```

## Customized hook
将组件逻辑提取到可重用函数中

HOC的缺点：需要添加html node，WrappedComponent 的参数和数据必须由HOC来决定




