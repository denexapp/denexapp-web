import React from 'react';
import styles from './styles.module.sass';

interface IProps {
  children: string;
}

export default (props: IProps) => (
  <h2 className={styles.component}>
    {props.children}
  </h2>
);
