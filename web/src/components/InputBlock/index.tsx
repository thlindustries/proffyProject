import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  title: string;
}

const InputBlock: React.FC<InputProps> = ({ htmlFor, title, ...rest }) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{title}</label>
      <input {...rest} id={htmlFor} />
    </Container>
  );
};

export default InputBlock;
