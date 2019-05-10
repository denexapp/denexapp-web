import React from 'react';
import styles from './styles.module.sass';
import Panel, { Color } from '../Panel';

interface IProps {
  color: Color;
  children: string;
  url: string;
}

export default (props: IProps) => (
  <a className={styles.component} href={props.url}>
    <Panel color={props.color}>{props.children}</Panel>
  </a>
);
