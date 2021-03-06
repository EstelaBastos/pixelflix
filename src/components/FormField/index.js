import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const WrapperFormField = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: transform 0.1s;
`;
const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #535850;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--pink);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValue }) => hasValue && css`
    &:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
      }
    `
}
`;

function FormField({
  label, value, onChange, name, type,
}) {
  const fieldId = `id_${name} `;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);

  return (
    <WrapperFormField>
      <Label htmlFor={fieldId}>
        <Input as={tag} id={fieldId} type={type} value={value} name={name} onChange={onChange} hasValue={hasValue} autoComplete={'off'} />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </WrapperFormField>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propType = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
