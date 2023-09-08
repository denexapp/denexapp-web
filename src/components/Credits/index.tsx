import styles from './styles.module.css';

interface IProps {
  children: string;
  link: string;
}

export default (props: IProps) => (
  <a
    className={styles.component}
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
);
