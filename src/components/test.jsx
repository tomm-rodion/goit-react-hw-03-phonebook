// // Отвечает за обновление состояния
// handleInputChange = event => {
//   console.log(event.currentTarget.value);
//   this.setState({ name: event.currentTarget.value });
// };
// // Вызывается при отправке формы
// handeleSubmit = event => {
//   event.preventDefault();
//   this.reset();
//   const newContact = {
//     idName: nanoid(),
//     name,
//   };

//   this.setState(({ contacts }) => {
//     const colectionContact = contacts.find(
//       contact => contact.name === newContact
//     );

//     if (colectionContact === newContact.name) {
//       return alert(`${newContact.name} is already in contacts`);
//     }

//     return { contacts: [newContact, ...contacts] };
//   });
// };

// reset = () => {
//   this.setState({ name: '' });
// };

// form
// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.number().min(5).max(15).required(),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };

// export const Phonebook = () => {
//   const hendleSubmit = (values, actions) => {
//     console.log(values);
//     console.log(actions);
//     actions.resetForm();
//   };
//   return (
//     <>
//       <div>
//         <h1>Phonebook</h1>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={hendleSubmit}
//           validationSchema={schema}
//         >
//           <Form>
//             <label htmlFor="name">
//               Name
//               <Field type="text" name="name" />
//             </label>
//             <ErrorMessage name="name" />
//             <label htmlFor="number">
//               Number
//               <Field type="text" name="number" />
//             </label>
//             <ErrorMessage name="number" />
//             <button type="submit">App contact</button>
//           </Form>
//         </Formik>
//         <h2>Contacts</h2>
//         <ul>
//           <li></li>
//         </ul>
//       </div>
//     </>
//   );
// };
