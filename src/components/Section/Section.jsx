import { SectionContainer, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionContainer>
    <Title>{title}</Title>
    {children}
  </SectionContainer>
);
