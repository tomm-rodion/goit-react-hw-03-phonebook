import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import propTypes from 'prop-types';
import React, { Component } from 'react';

export class ContactsForm extends Component {
  handleSubmit = ({ name, number }, { resetForm }) => {
    const nameInContacts = this.props.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    //перевірка існуючого кантакта в телефоній книжці.
    if (nameInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    // створення нового контакта
    const newContact = { id: nanoid(), name, number };
    this.props.onSubmit(newContact);
    resetForm();
  };

  schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().positive().required(),
  });

  render() {
    const initialValues = { name: '', number: '' };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
      >
        <Form>
          <label htmlFor="name">
            Name
            <Field type="text" name="name" placeholder="First Name" />
          </label>
          <label htmlFor="number">
            Number
            <Field type="text" name="number" placeholder="Number tel:" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
