import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  link: (backgroundColor) => ({
    display: "block",
    width: "100%",
    maxWidth: "140px",
    padding: "12px",
    fontSize: "20px",
    textDecoration: "none",
    outlineOffset: "0",
    outlineColor: "#326EFF",
    outlineWidth: "2px",

    outlineStyle: {
      ":focus-visible": "solid",
    },

    color: {
      default: "#000",
      ":hover": "#fff",
    },

    background: {
      default: "white",
      ":hover": backgroundColor,
    },
  }),
});

export type Color = [number, number, number];

interface IProps {
  backgroundColor: Color;
  children: string;
  url: string;
}

export default (props: IProps) => {
  const { children, backgroundColor, url } = props;

  const backgroundColorString = `rgb(${backgroundColor.join()})`

  return (
    <a
      {...stylex.props(styles.link(backgroundColorString))}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
