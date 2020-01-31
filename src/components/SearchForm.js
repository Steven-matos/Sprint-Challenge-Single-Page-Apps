import React from 'react';
import styled from 'styled-components';

const Form = styled.form `
  text-align: right;
`;

const Input = styled.input `
    font-size: 1.2rem;
    border: 1px solid black;
    border-radius: 2px;
`;

const SearchForm = ({handleInputChange, query}) => {
  return (
    <section className="search-form">
      <Form>
        <Input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </Form>
    </section>
  );
};

export default SearchForm;