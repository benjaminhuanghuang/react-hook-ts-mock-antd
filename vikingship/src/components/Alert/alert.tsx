import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

export interface AlertProps {
  title: string;
  description: string;

  type: AlertType;
  onClose: any;
  closable: boolean;
}

const Alert: FC<AlertProps> = (props) => {
  return <div>Alert</div>;
};

export default Alert;
