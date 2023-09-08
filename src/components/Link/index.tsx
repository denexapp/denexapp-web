import { CSSProperties } from 'react';
import styles from './styles.module.css';

export type Color = [number, number, number];

interface IProps {
  backgroundColor: Color;
  children: string;
  url: string;
}

interface StyleWithCustomProperties extends CSSProperties {
  '--backgroundColor': string;
}

export default (props: IProps) => {
  const { children, backgroundColor, url } = props;

  const style: StyleWithCustomProperties = { '--backgroundColor': `rgb(${backgroundColor.join()})` };

  return (
    <a
      className={styles.component}
      style={style}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
