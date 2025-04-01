import React, { type Dispatch, type SetStateAction } from 'react';
import { Icon } from './Icon.tsx';
import { Status } from '../definitions.ts';
import styles from './DateNavigation.module.css';

const nth = (num: number) => {
  if (num > 3 && num < 21) {
    return `${num.toString()}th`;
  }
  switch (num % 10) {
    case 1:
      return `${num.toString()}st`;
    case 2:
      return `${num.toString()}nd`;
    case 3:
      return `${num.toString()}rd`;
    default:
      return `${num.toString()}th`;
  }
};

const DateRender = ({ currentDate }: { currentDate: Date }) => (
  <>
    {currentDate.toLocaleDateString(navigator.language, {
      weekday: 'long',
    })}{' '}
    the{' '}
    {nth(
      Number.parseInt(
        currentDate.toLocaleDateString(navigator.language, {
          day: 'numeric',
        }),
        10,
      ),
    )}{' '}
    of{' '}
    {currentDate.toLocaleDateString(navigator.language, {
      month: 'long',
    })}{' '}
  </>
);

export const DateNavigation = ({
  currentDate,
  setCurrentDate,
  setCurrentDateString,
}: {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setCurrentDateString: Dispatch<SetStateAction<string>>;
}) => (
  <span className={styles.navigation}>
    <button
      onClick={() => {
        const nextDate = new Date(
          new Date(currentDate).setDate(currentDate.getDate() - 7),
        );
        setCurrentDate(nextDate);
        setCurrentDateString(nextDate.toLocaleString().split(',')[0]);
      }}
    >
      <Icon status={Status.arrow} className={styles.first} />
    </button>
    <h1>
      <DateRender currentDate={currentDate} /> ==&gt;{' '}
      <DateRender
        currentDate={
          new Date(new Date(currentDate).setDate(currentDate.getDate() + 4))
        }
      />
    </h1>
    <button
      onClick={() => {
        const nextDate = new Date(
          new Date(currentDate).setDate(currentDate.getDate() + 7),
        );
        setCurrentDate(nextDate);
        setCurrentDateString(nextDate.toLocaleString().split(',')[0]);
      }}
    >
      <Icon status={Status.arrow} />
    </button>
  </span>
);
