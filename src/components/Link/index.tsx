import React from 'react';
import styles from './styles.module.sass';
import Panel, { Color } from '../Panel';
import { useHover, useFocus } from 'use-events';

interface IProps {
  color: Color;
  children: string;
  url: string;
}

export default (props: IProps) => {
  const [isHovered, bindHover] = useHover();
  const [isFocused, bindFocus] = useFocus();
  
  return (
    <a
      {...bindFocus}
      {...bindHover}
      className={styles.component}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Panel isFocused={isFocused} isHovered={isHovered} color={props.color}>
        {props.children}
      </Panel>
    </a>
  );
};
