import React, { Component } from 'react';
import { FormWrapper } from './FormWrapper.styled';
import { Form } from './Form.styled';
import { FormTitle } from './FormTitle';
import { SearchInput } from './SearchInput.styled';
import { Button } from './FormButton';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  onInputChange = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormWrapper>
        <Form
          onSubmit={evt => {
            this.props.onConfirmAddFriend(evt, name, number);
            this.setState({ name: '', number: '' });
          }}
        >
          <FormTitle title="Name">
            <SearchInput
              type="text"
              name="name"
              id="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onInput={this.onInputChange}
            />
          </FormTitle>
          <FormTitle title="Number">
            <SearchInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onInput={this.onInputChange}
            />
          </FormTitle>
          <Button type="submit" text="Add contact" />
        </Form>
      </FormWrapper>
    );
  }
}