import React from 'react';
import styles from './styles.module.sass';
import Panel, { Color } from '../Panel';

interface IProps {
  color: Color;
  children: string;
  url: string;
}

export default (props: IProps) => (
  <a className={styles.component} href={props.url} target='_blank' rel='noopener noreferrer'>
    <Panel color={props.color}>{props.children}</Panel>
  </a>
);
