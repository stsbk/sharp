import React from 'react';
import classes from './contactList.module.scss';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, deleteContact }) => {
    console.log(filter);
    const filterContacts = contacts && contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul>
            {
                filterContacts && filterContacts.map(item => {
                    return (
                        <li key={item.id} className={classes.userInfo}>
                            <span>{item.name}: {item.number}</span>
                            <button id={item.id} onClick={(e) => deleteContact(e.target.id)}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    deleteContact: PropTypes.func
}
