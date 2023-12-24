import stylex from "@stylexjs/stylex";
import { FC } from "react";

const styles = stylex.create({
  link: {
    fontSize: "18px",
    margin: "10px",
    textAlign: "center",
    outline: "none",

    textDecoration: {
      default: "none",
      ":hover": "underline",
      ":focus": "underline",
    },

    color: {
      default: "rgba(255, 255, 255, 0.7)",
      ":hover": "rgba(255, 255, 255, 1)",
      ":focus": "rgba(255, 255, 255, 1)",
    },
  },
});

interface CreditsProps {
  children: string;
  link: string;
}

const Credits: FC<CreditsProps> = (props) => (
  <a
    {...stylex.props(styles.link)}
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
);

export default Credits;
