import React from 'react';
import { Status } from '../definitions.ts';
import active from '../icons/active.svg';
import arrow from '../icons/arrow.svg';
import complete from '../icons/complete.svg';
import number from '../icons/number.svg';
import paused from '../icons/paused.svg';
import pushed from '../icons/pushed.svg';

export const Icon = ({
  status,
  ...rest
}: {
  status: Status;
  onClick?: () => void;
  className?: string;
}) => {
  switch (status) {
    case Status.active:
      return <img src={active} alt="active note" {...rest} />;
    case Status.complete:
      return <img src={complete} alt="complete note" {...rest} />;
    case Status.pushed:
      return <img src={pushed} alt="pushed note" {...rest} />;
    case Status.paused:
      return <img src={paused} alt="paused note" {...rest} />;
    case Status.arrow:
      return <img src={arrow} alt="an arrow" {...rest} />;
    case Status.number:
      return <img src={number} alt="an number" {...rest} />;
    default:
      return null;
  }
};
