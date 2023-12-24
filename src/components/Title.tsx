import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  title: {
    textAlign: "center",
    fontWeight: "normal",
    margin: "24px 0",
    fontSize: "32px",
  },
});

interface IProps {
  children: string;
}

export default (props: IProps) => (
  <h2 {...stylex.props(styles.title)}>{props.children}</h2>
);
