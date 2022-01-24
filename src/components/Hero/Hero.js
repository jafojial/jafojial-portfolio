import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Link } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        My goal is to help final customers and company of any size to bringing their ideas to life by building awesome apps and products with high added value.
        </SectionText>
        <Link href="/cv/JAZA_FOLEFACK_JIOKEU_ALEX_CV_ENG.pdf" target="_blank" download>Download my CV</Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;