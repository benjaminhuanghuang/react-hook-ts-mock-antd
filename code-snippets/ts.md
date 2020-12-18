
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