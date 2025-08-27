import React from 'react';

import { Section, SectionText, SectionTitle, SectionSubTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Link } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          JAZA FOLEFACK JIOKEU Alex
        </SectionTitle>
        <SectionSubTitle>
          Software Developer | Services Integration | Fintech | Technical Support | AWS Certified
        </SectionSubTitle>
        <SectionText>
          My goal is to help final customers and company of any size to bringing their ideas to life by building and support awesome apps and products with high added value.
        </SectionText>
        <Link href="https://docs.google.com/document/d/1DHH8cQF2OOmdtlfl7KBRWUwq-Sbw1-8oXibN-VXj8Do/edit?usp=sharing" target="_blank" download>Download my CV</Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;