import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BiSearchAlt } from 'react-icons/bi';

import {
  Wrapper,
  SearchForm,
  SearchInput,
  SearchFormBtn,
} from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = evt => {
    setSearchInput(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchInput.trim()) {
      onSubmit(searchInput);
      // setSearchInput('');
      return;
    }
    toast.error('Please enter the text in the search field! 🔍', {});
  };

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          name="searchInput"
          value={searchInput}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search a movie by name"
        />
        <SearchFormBtn type="submit">
          <BiSearchAlt />
        </SearchFormBtn>
      </SearchForm>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
