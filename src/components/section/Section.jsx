import { Title } from './Section.styled';

export const Section = ({ title, Children }) => {
  return (
    <Title>
      <h2>{title}</h2>
      {Children}
    </Title>
  );
};
