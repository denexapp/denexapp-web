import * as stylex from "@stylexjs/stylex";
import { FC } from "react";
import Link, { Color } from "./Link";
import Title from "./Title";

const styles = stylex.create({
  main: {
    minHeight: "100dvh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    padding: "16px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "0 auto",
    maxWidth: "500px",
    gap: "16px",
  },
  spacer: {
    flexGrow: "1",
  },
});

type LinkData = [string, Color, string];

const data: Array<LinkData> = [
  ["Telegram", [0, 136, 204], "https://t.me/denexapp"],
  ["Discord", [114, 137, 218], "https://discord.com/users/304173216828489729"],
  ["LinkedIn", [10, 102, 194], "https://www.linkedin.com/in/denexapp"],
  ["Resume", [32, 121, 199], "https://denexapp.me/resume.pdf"],
  ["Instagram", [215, 0, 89], "https://www.instagram.com/denexapp"],
  ["GitHub", [36, 41, 46], "https://github.com/denexapp"],
  [
    "Ethereum",
    [135, 169, 239],
    "https://etherscan.io/address/0x63185aDf94e66B793Be9FFD552F99a6AD2699B31",
  ],
  ["YouTube", [255, 0, 0], "https://youtube.com/denexapp"],
  ["Twitch", [100, 65, 164], "https://twitch.tv/denexapp"],
  ["Steam", [0, 0, 0], "https://steamcommunity.com/id/denexapp"],
  [
    "Battle.net",
    [4, 167, 242],
    "https://overwatch.blizzard.com/en-us/career/denexapp-2391",
  ],
  [
    "VRChat",
    [11, 90, 149],
    "https://vrchat.com/home/user/usr_47ef8889-194d-4834-ab0a-33a90d9fc89c",
  ],
  ["Reddit", [255, 86, 0], "https://www.reddit.com/user/denexapp"],
  ["VK", [70, 128, 194], "https://vk.com/denexapp"],
];

const links = data.map(([name, color, url]) => (
  <Link url={url} backgroundColor={color}>
    {name}
  </Link>
));

const Main: FC = () => (
  <div {...stylex.props(styles.main)}>
    <Title>denexapp</Title>
    <div {...stylex.props(styles.container)}>{links}</div>
  </div>
);

export default Main;
