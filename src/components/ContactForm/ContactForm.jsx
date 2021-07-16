import React from 'react';
import { useState } from 'react';
import classes from './contactForm.module.scss';
import PropTypes from 'prop-types';

export const ContactForm = ({ addContact }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const writeValue = (e) => {
        e.target.id === "name"
            ? setName(e.target.value)
            : setNumber(e.target.value)
    };

    const handleClick = (name, number) => {
        addContact(name, number);
        setName('');
        setNumber('');
    };

    return (
        <div className={classes.contactForm}>
            <span>Name</span>
            <input type="text" id="name" value={name} onChange={writeValue} />
            <span>Number</span>
            <input type="text" id="number" value={number} onChange={writeValue} />
            <button onClick={() => handleClick(name, number)}>Add contact</button>
        </div>
    );
};

ContactForm.propTypes = {
    addContact: PropTypes.func
}
