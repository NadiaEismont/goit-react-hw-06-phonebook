import React from 'react';
import { PropTypes } from 'prop-types';
import { LabelFilter, InputFilter } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <LabelFilter>
    Find contacts by name
    <InputFilter type="text" value={value} onChange={onChange} />
  </LabelFilter>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
