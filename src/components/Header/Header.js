import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck, DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCode size="3rem" /> <span>Jafojial Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="https://intelso.cm/blog/">
          <NavLink>Blog</NavLink>
        </Link>
      </li>       
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/jafojial">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/alex-jiokeu/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/jafojial/">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/jafojial/">
          <AiFillYoutube size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/jafojial/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
