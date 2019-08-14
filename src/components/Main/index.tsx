import React from 'react';
import styles from './styles.module.sass';
import Link from '../Link';
import Button from '../Button';
import Title from '../Title';
import Credits from '../Credits';
import { Color } from '../Panel';

type LinkData = [string, Color, string?, string?];

const data: Array<LinkData> = [
  ['Telegram', [0, 136, 204], 'https://t.me/denexapp'],
  ['GitHub', [36, 41, 46], 'https://github.com/denexapp'],
  ['Twitter', [29, 160, 241], 'https://twitter.com/denexapp'],
  ['VK', [70, 128, 194], 'https://vk.com/denexapp'],
  ['Instagram', [215, 0, 89], 'https://www.instagram.com/denexapp/'],
  [
    'YouTube',
    [255, 0, 0],
    'https://youtube.com/channel/UCqRF9DVbhtZKQIQGu-9H1fg'
  ],
  ['Twitch', [100, 65, 164], 'https://twitch.tv/denexapp'],
  ['Steam', [0, 0, 0], 'https://steamcommunity.com/id/denexapp'],
  ['Battle.net', [4, 167, 242], undefined, 'denexapp#2391'],
  ['Discord', [114, 137, 218], undefined, 'denexapp#0001']
];

export default () => (
  <div className={styles.component}>
    <div className={styles.spacer} />

    <Title>Denis Mukhametov</Title>
    <div className={styles.container}>
      {data.map(([name, color, url, copy]) => {
        if (typeof url === 'string') {
          return (
            <Link color={color} url={url}>
              {name}
            </Link>
          );
        } else if (typeof copy === 'string') {
          return (
            <Button color={color} textToCopy={copy}>
              {name}
            </Button>
          );
        }
        return null;
      })}
    </div>
    <div className={styles.spacer} />
    <Credits link="https://unsplash.com/photos/R4Y3JSKXfio">
      Photo by Joel Cross on Unsplash
    </Credits>
  </div>
);
