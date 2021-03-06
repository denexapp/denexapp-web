import React, { useState, useRef } from 'react';
import Panel, { Color } from '../Panel';
import copy from 'clipboard-copy';
import styles from './styles.module.sass';
import { useHover, useFocus } from 'use-events';

interface IProps {
  color: Color;
  children: string;
  textToCopy: string;
}

export default (props: IProps) => {
  const [isHovered, bindHover] = useHover();
  const [isFocused, bindFocus] = useFocus();
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
    <button
      className={styles.component}
      onClick={handleClick}
      {...bindFocus}
      {...bindHover}
    >
      <Panel isFocused={isFocused} isHovered={isHovered} color={props.color}>
        {text}
      </Panel>
    </button>
  );
};
