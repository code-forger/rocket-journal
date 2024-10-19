import React from 'react';
import styles from './Paper.module.css';

const LINES_ON_PAGE = 50;

export const Paper = (props: { context?: boolean } = { context: false }) => (
  <div className={styles.paper}>
    <span
      className={`${styles.vertical} ${
        props.context === true ? styles.hasSidebar : ''
      }`}
    ></span>
    {Array.from({ length: LINES_ON_PAGE }).map((_, index) => (
      <span
        key={index}
        className={styles.horizontal}
        style={{ '--n': index } as React.CSSProperties}
      ></span>
    ))}
  </div>
);
