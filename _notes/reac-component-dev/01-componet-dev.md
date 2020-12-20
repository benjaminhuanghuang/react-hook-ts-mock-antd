## Component Dev 

- Step 1. Analysis props

- Step 2. Create source code
  - .jsx or .tsx for Compoent
  - _style.scss for style, 可以在一开始就看到component的外观
  - .test.js or test.ts for testing

- Step 3. Coding 
  conver props to Tab, csss, attribute
  ```
  export const MyComponent: FC<MyComponentProps> = (props) => {
    // step 1. read all prop
    const {
    ...restProps
    } = props

    // step 2. calculate css based on props
    const cnames = classNames('my-default-style', {
      [`input-size-${size}`]: size,
      'is-disabled': disabled
      ...
    })

    // step 3. generate elements/html tag based on props
    return (

    )
  ```
- Step 4.
  check html
  
  check result in storybook


- Step 5.
  add variable in _variables.scss

  create _styles.css

  