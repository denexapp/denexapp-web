import styles from './styles.module.css';

interface IProps {
  children: string;
}

export default (props: IProps) => (
  <h2 className={styles.component}>
    {props.children}
  </h2>
);
