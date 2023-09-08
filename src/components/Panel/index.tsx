import styles from './styles.module.css';



interface IProps {
  color: Color;
  children: string;
}

export default (props: IProps) => {
 
    '--hoverColor': 
  };

  return (
    <div className={styles.component}   style={style}>
      {props.children}
    </div>
  );
};
