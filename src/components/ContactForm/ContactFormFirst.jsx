// import React, { Component } from 'react';
// import css from './ContactForm.module.css';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     const sampleName =
//       "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
//     const sampleNumber =
//       '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}';
//     return (
//       <form className={css.formContact} onSubmit={this.handleSubmit}>
//         <label className={css.label}>
//           Name
//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             pattern={sampleName}
//             required
//           />
//         </label>
//         <label className={css.label}>
//           Number
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             pattern={sampleNumber}
//             required
//           />
//         </label>
//         <button className={css.buttonContact} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
