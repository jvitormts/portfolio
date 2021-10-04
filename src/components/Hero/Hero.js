import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection   >
    <SectionTitle main center>
      Bem vindo ao < br / >
        meu portfoloio pessoal
    </SectionTitle>
    <SectionText>
      Sou formado em Análise e Desenvolvimento de Sistemas e atuo na área de TI desde 2018
    </SectionText>
    <Button href="mail:jvitor.smartins@gmail.com">Acesse meu curriculo </Button>
  </LeftSection>
</Section>
);

export default Hero;