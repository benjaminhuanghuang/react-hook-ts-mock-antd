import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export type AlertType = 'success' | 'default' |'danger'| 'warning';


interface AlertProps {
  alterType?: AlertType;
  children: React.ReactNode;
}


export const Alert: FC<AlertProps> = (props) => {

};