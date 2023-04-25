import { useState } from 'react';
import { Button, Input, Form } from './Search.styled';

export const Search = ({setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(query !== '' ? {query} : {})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" onChange={handleChange} />
      <Button type="submit">Search</Button>
    </Form>
  );
};