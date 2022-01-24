import React from 'react';
import { DiFirebase, DiReact, DiEclipse, DiAndroid, DiJenkins, DiCodepen } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      I consider myself a Back-end developer but I can intervene at any stage of the implementation and operation of applications.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiEclipse size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Experience with <br />
            Spring boot/Spring Cloud, Liferay, Symfony/API Platform, Express, Django/Django REST, Flask, Slim Framework, Flutter, Gin 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            JAVA/J2EE, Python, PHP, Node, Dart, GO, C#, SQL, GraphQL and Databases like PostgreSQL, MySQL/MariaDB, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End & Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Html5, CSS3, React.js, NextJS, Svelte/SvelteKit, Vite, Bootstrap, jQuery, Tailwind CSS and tools like Gimp, Figma, Sketch
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Experiece with <br />
            JAVA/Kotlin Androïd native development and Cross-Platform development using Dart and FLutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodepen size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Integration & Test</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Kong, Wso2 API Management and Test automation with Postman, SOAP UI, Selenium, Katalon, Insomnia
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJenkins size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Automation & Administration</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Docker, Kubernetes, Vmware, Virtual Box and operating systems like Linux, AIX, Windows Server
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
