import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import cn from 'classnames';

import * as css from './Footer.module.css';

import Logo from '../images/logo.svg';
import Train from '../images/train.svg';
import Github from '../images/github.svg';
import Discord from '../images/discord.svg';
import Youtube from '../images/youtube.svg';
import Instagram from '../images/instagram.svg';

import { cols, col } from '../styles/styles.module.css';

const Footer = () => {
  return (
    <div className={css.root}>
      <div className={css.logoMobile}>
        <Logo width={250} />
      </div>
      <div className={cn(cols, css.actions)}>
        <div className={cn(css.box, css.topbox)}>
          <div className={css.logo}>
            <Logo width={250} />
          </div>
          <div className={css.train}>
            <Train />
          </div>
        </div>
        <div className={cn(css.box)}>
          <h3>Become a member</h3>
          <div className={css.action}>
            <p>
              Support the Coding Train and get access to a number of perks like
              stickers and member-only livestreams.
            </p>
            <a>Support now</a>
          </div>
        </div>
        <div className={cn(css.box)}>
          <h3>Join the community</h3>
          <div className={css.action}>
            <p>
              Join our channel on Discord to find answers to your questions and
              take part in our inclusive community.
            </p>
            <a>Join now</a>
          </div>
        </div>
        <div className={cn(css.box)}>
          <h3>Shop</h3>
          <div className={css.action}>
            <p>
              Visit the Coding Train store with a small selection of high
              quality items.
            </p>
            <a>Go now</a>
          </div>
        </div>
      </div>
      <div className={css.links}>
        <div className={css.socials}>
          <ul>
            <li>
              <a href="https://github.com/CodingTrain">
                <Github width={30} />
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/hPuGy2g">
                <Discord width={30} />
                <span>Discord</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/TheCodingTrain/">
                <Youtube width={30} />
                <span>Youtube</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/the.coding.train">
                <Instagram width={30} />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span>Get started</span>
          <ul>
            <li>Getting started guide</li>
          </ul>
        </div>
        <div>
          <span>Videos</span>
          <ul>
            <li>Tracks</li>
            <li>Challenges</li>
            <li>FAQ</li>
            <li>Archive</li>
          </ul>
        </div>
        <div>
          <span>Community</span>
          <ul>
            <li>Discord</li>
            <li>Gallery</li>
            <li>Contribute</li>
            <li>Github</li>
          </ul>
        </div>
        <div>
          <span>About</span>
          <ul>
            <li>Talks</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
      <div className={css.logos}>
        <div>The coding train contributors:</div>
        <div>
          <StaticImage
            src="../images/nyu.png"
            alt=""
            objectFit="contain"
            className={css.image}
          />
          <p>NYU creative grant 2018-present</p>
        </div>
        <div>
          <StaticImage
            src="../images/itp.png"
            alt=""
            objectFit="contain"
            className={css.image}
          />
          <p>ITP research fellowship mentorship</p>
        </div>
        <div>
          <StaticImage
            src="../images/google.png"
            alt=""
            objectFit="contain"
            className={css.image}
          />
        </div>
      </div>
      <div className={css.copyright}>
        2021 The Coding Train. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
