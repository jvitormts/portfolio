import React from 'react';
import { DiDatabase, DiReact, DiGhostSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut diam non dolor euismod mattis nec at massa. Etiam urna libero, venenatis non mauris eu, consequat laoreet est. 
    </SectionText>
    <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>
          Experiência com <br />
          React.js <br / >
            HTML5 / CSS3
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiGhostSmall size="3rem"/>
      <ListContainer>
        <ListTitle>Back-end</ListTitle>
        <ListParagraph>
          Experiência com <br />
         Node <br />
         PHP / Laravel <br />
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiDatabase size="3rem"/>
      <ListContainer>
        <ListTitle>Banco de Dados e Infraestrutura</ListTitle>
        <ListParagraph>
          Experiência com <br />
          Docker <br />
          MySQL e SQL Server
        </ListParagraph>
      </ListContainer>
    </ListItem>
    </List>
  </Section>
);

export default Technologies;
