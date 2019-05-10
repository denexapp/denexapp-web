import React from 'react';
import { useHover } from 'use-events';
import styles from './styles.module.sass';

export type Color = [number, number, number];

const white: Color = [255,255,255]

interface IProps {
  color: Color;
  children: string;
}

export default (props: IProps) => {
  const [isHovered, bind] = useHover();
  const opacity = isHovered ? 1 : 0.8;
  const color = isHovered ? props.color : white
  const backgroundColor = `rgba(${[...color, opacity].join(',')})`;
  const fontColor = isHovered ? 'white' : 'black'
  return (
    <div {...bind} className={styles.component} style={{ backgroundColor, color: fontColor }}>
      {props.children}
    </div>
  );
};
