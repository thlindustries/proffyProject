import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  htmlFor: string;
  title: string;
}

const Textarea: React.FC<TextAreaProps> = ({ htmlFor, title, ...rest }) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{title}</label>
      <textarea {...rest} id={htmlFor} />
    </Container>
  );
};

export default Textarea;
