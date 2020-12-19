
  enum vs literal type
```
export enum ButtonType {
  Primary =  'primary',
  Default =  'default',
}
<Button btnType={ButtonType.Primary}>Hellos</Button>


export type ButtonType2 = 'primary' | 'default' | 'danger' | 'link'
<Button btnType='primary'>Hellos</Button>
```


  Merge 2 types (Intersection types)
```
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

// merge button props with the HTML button arribute
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
```


```
  // use getElementByTagName('li') will get the li in subMene
  // ':scope > li' means li under current element
  expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5)
 
```

To test visable/invisible, add css to test
```
  const createStyleFile = () => {
    const cssFile: string = `
      .viking-submenu {
        display: none;
      }
      .viking-submenu.menu-opened {
        display:block;
      }
    `
    const style = document.createElement('style')
    style.innerHTML = cssFile
    return style
  }

  wrapper.container.append(createStyleFile())
```