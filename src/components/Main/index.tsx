import React from 'react';
import styles from './styles.module.sass';
import Link from '../Link';
import Button from '../Button';
import Title from '../Title';
import Credits from '../Credits';
import { Color } from '../Panel';

type LinkData = [string, Color, string];

const data: Array<LinkData> = [
  ['Telegram', [0, 136, 204], 'https://t.me/denexapp'],
  ['Discord', [114, 137, 218], 'https://discord.com/users/304173216828489729']
  ['Instagram', [215, 0, 89], 'https://www.instagram.com/denexapp/'],
  ['GitHub', [36, 41, 46], 'https://github.com/denexapp'],
  ['Ethereum', [135, 169, 239], 'https://etherscan.io/address/0x9F48c5f58903c66006A0432231b9a9ac0aE3Da61']
  ['YouTube', [255, 0, 0], 'https://youtube.com/denexapp'],
  ['Twitch', [100, 65, 164], 'https://twitch.tv/denexapp'],
  ['Steam', [0, 0, 0], 'https://steamcommunity.com/id/denexapp'],
  ['Battle.net', [4, 167, 242], 'https://overwatch.blizzard.com/en-us/career/denexapp-2391'],
  ['VRChat', [11, 90, 149], 'https://vrchat.com/home/user/usr_47ef8889-194d-4834-ab0a-33a90d9fc89c'],
  ['Reddit', [255, 86, 0], 'https://www.reddit.com/user/denexapp']
  ['VK', [70, 128, 194], 'https://vk.com/denexapp'],
];

const links = data.map(([name, color, url]) => (
  <Link color={color} url={url}>
    {name}
  </Link>
));

export default () => (
  <div className={styles.component}>
    <div className={styles.spacer} />
    <Title>denexapp</Title>
    <div className={styles.container}>
      {links}
    </div>
    <div className={styles.spacer} />
    <Credits link="https://unsplash.com/photos/R4Y3JSKXfio">
      Photo by Joel Cross on Unsplash
    </Credits>
  </div>
);
