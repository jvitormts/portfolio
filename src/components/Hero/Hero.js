import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection   >
    <SectionTitle main right>
      Bem vindo ao < br / >
        meu portfolio pessoal
    </SectionTitle>
    <SectionText>
      Olá, me chamo João Vitor Martins, sou formado em Análise de Sistemas e possuo vasta experiência em infraestrutura e suporte e atualmente dando meus primeiros passo na área de Desenvolvimento
    </SectionText>
    <Button href="mail:jvitor.smartins@gmail.com">Acesse meu curriculo </Button>
  </LeftSection>
</Section>
);

export default Hero;