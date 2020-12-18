
##
```
```


## test file Naming Convention

`__tests__`

.test.js

.spec.js

## Tools
- Jest (Test framework)
  create-react-app 默认已经安装 Jest

- @testing-library/react (render React Component)
  
  create-react-app 默认已经安装 

  ```
  npm i -D @testing-library/react
  ```

  ```
  expect(element).toBeTruthy()
  ```
- jest-dom  (Add toBe***)

  create-react-app 默认已经安装 jest-dom 
  ```
  npm i -D @testing-library/jest-dom   # 
  ```
  jest-dom 增加断言 toBe***
  ```
    expect(element).toBeInTheDocument()
  ```


  need setupTests.ts
  ```
  import '@testing-library/jest-dom/extend-expect'
  ```


## Test point
- is the html tag rendered
- check different props
- disable
- evnet fired