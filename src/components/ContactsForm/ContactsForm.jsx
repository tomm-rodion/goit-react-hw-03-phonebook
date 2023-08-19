import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import {
  FormAddContact,
  InputField,
  Label,
  ButtonAddContact,
} from './ContactsForm.styled';

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
    name: yup.string().min(2).max(12).required(),
    number: yup.string().min(2).max(12).required(),
  });

  render() {
    const initialValues = { name: '', number: '' };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
      >
        <FormAddContact>
          <Label htmlFor="name">
            Name
            <InputField type="text" name="name" placeholder="First Name" />
          </Label>
          <Label htmlFor="number">
            Number
            <InputField type="text" name="number" placeholder="Number tel:" />
          </Label>
          <ButtonAddContact type="submit">Add contact</ButtonAddContact>
        </FormAddContact>
      </Formik>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
