
可选参数
```
  function add(x: number, y:number, z?:number):number{
    return x + y;
  }
```
自动识别成可选参数
```
  function add(x: number, y:number, z:number = 10):number{
    return x + y;
  }
```

type of function
```
  const fun: (x: number, y:number, z:number = 10) => number = a
```