import React from 'react';

export enum LEVEL {
  DEBUG,
  INFO,
  SUCCESS,
  WARNING,
  ERROR,
  CRITICAL,
}

type NotificationProps = {
  message: string;
  level?: LEVEL;
};

const Notification = (props: NotificationProps) => {
  const onClose = () => {};
  return (
    <div className="Notification" onClick={onClose}>
      {props.message}
    </div>
  );
};

export default Notification;