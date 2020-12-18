/*
  enum vs type

  
*/
export enum ButtonType {
  Primary =  'primary',
  Default =  'default',
}

export type ButtonType2 = 'primary' | 'default' | 'danger' | 'link'


/*
  Merge 2 types
*/
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
