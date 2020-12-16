
## Primitive *8 
- boolean
- null
- undefined
```
  let u: undefined = undefined
  let u: null = null

  let n: number = undefind
```
- number
```
  let binNum: number = 0b1111
```
- string


- Bigint (ES6)
- Symbol (ES6)

- object

## any
不建议使用，any类型没有任何类型检测和提示
```
  let notSure: any = 4;
  notSure = 'string'
  notSure.getName()       // any
``` 
## Union Types
```
  let numOrStr: number | string = 234
```

## Intersection types
```
  // Provide native properties, like OnClick 
  type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
```

## Array
let arr: number[] : [1, 2, 3]

## Tuple
```
let user: [string, number] = ['test', 10]
```

## String Literal TYpe
type Dir = "East" | "West" |"Norte" | "South"
