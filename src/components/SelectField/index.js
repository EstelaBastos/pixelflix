import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperSelectField = styled.div`
  position: relative;
`;
const Select = styled.select`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px; 
  margin-bottom: 45px;
`;
const Option = styled.option``;

function SelectField({
  label, values, value, onSelect, name,
}) {
  const fieldId = `id_${name} `;
  return (
    <WrapperSelectField>
      <Select id={fieldId} value={value} onChange={onSelect} name={name}>
        <Option value="">{label}</Option>
        {values.map((option) => (<Option key={option.id} value={option.id}>{option.name}</Option>))}
      </Select>
    </WrapperSelectField>
  );
}

SelectField.defaultProps = {
  value: '',
  onSelect: () => { },
};

SelectField.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onSelect: PropTypes.func,
};

export default SelectField;
