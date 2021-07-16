import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return (
        <>
            <span>Find contacts by name</span> <br />
            <input value={value} onChange={onChange} />
        </>
    )
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};
