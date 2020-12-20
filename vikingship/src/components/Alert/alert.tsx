import React, { FC, useState, MouseEvent } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import Transition from '../Transition';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

export interface AlertProps {
  title: string;
  description: string;

  type: AlertType;
  onClose: any;
  closable: boolean;
}

const Alert: FC<AlertProps> = (props) => {
  const { title, description, type, onClose, closable } = props;

  const [hide, setHide] = useState(false);
  const classes = classNames('viking-alert', {
    [`viking-alert-${type}`]: type,
  });
  const titleClass = classNames('viking-alert-title', {
    'bold-title': description,
  });
  const handleClose = (e: MouseEvent<HTMLElement>) => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };
  return (
    <Transition in={!hide} animation="zoom-in-top" timeout={300}>
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="viking-alert-desc">{description}</p>}
        {closable && (
          <span className="viking-alert-close" onClick={handleClose}>
            <Icon icon="times" />
          </span>
        )}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  type: 'default',
  closable: true,
};

export default Alert;
