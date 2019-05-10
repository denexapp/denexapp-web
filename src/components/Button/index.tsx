import React, { useState, useRef } from 'react';
import Panel, { Color } from '../Panel';
import copy from 'clipboard-copy';
import styles from './styles.module.sass';

interface IProps {
  color: Color;
  children: string;
  textToCopy: string;
}

export default (props: IProps) => {
  const [copied, setCopied] = useState<null | boolean>(null);
  const timer = useRef<null | number>(null);

  const handleClick = async () => {
    try {
      await copy(props.textToCopy);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setCopied(null);
      timer.current = null;
    }, 3000);
  };

  let text = props.children;

  if (copied === true) {
    text = 'Copied';
  } else if (copied === false) {
    text = props.textToCopy;
  }

  return (
    <button className={styles.component} onClick={handleClick}>
      <Panel color={props.color}>{text}</Panel>
    </button>
  );
};
