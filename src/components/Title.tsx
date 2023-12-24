import * as stylex from "@stylexjs/stylex";
import { FC } from "react";

const styles = stylex.create({
  title: {
    textAlign: "center",
    fontWeight: "normal",
    margin: "24px 0",
    fontSize: "32px",
    color: "#fff",
  },
});

interface TitleProps {
  children: string;
}

const Title: FC<TitleProps> = (props) => (
  <h2 {...stylex.props(styles.title)}>{props.children}</h2>
);

export default Title;
