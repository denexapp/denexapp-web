import React from 'react';
import styles from './styles.module.sass';

export type Color = [number, number, number];

const white: Color = [255, 255, 255];

interface IProps {
  color: Color;
  children: string;
  isHovered: boolean;
  isFocused: boolean;
}

export default (props: IProps) => {
  const { isHovered, isFocused } = props;
  
  const isActive = isHovered || isFocused;

  const opacity = isActive ? 1 : 0.8;
  const propsColor = `rgb(${props.color.join(',')})`;
  const color = isActive ? props.color : white;
  const backgroundColor = `rgba(${[...color, opacity].join(',')})`;
  const borderColor = isFocused ? 'white' : 'transparent';
  const outlineColor = isFocused ? propsColor : 'transparent';
  const fontColor = isActive ? 'white' : 'black';

  const style = {
    backgroundColor,
    color: fontColor,
    borderColor,
    outlineColor
  };

  return (
    <div className={styles.component} style={style}>
      {props.children}
    </div>
  );
};
