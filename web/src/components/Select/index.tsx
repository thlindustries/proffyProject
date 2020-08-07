import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  htmlFor: string;
  title: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  htmlFor,
  title,
  options,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{title}</label>
      <select value="" {...rest} id={htmlFor}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
