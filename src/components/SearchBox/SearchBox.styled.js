import styled from 'styled-components';
// import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: 5px;
  overflow: hidden;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus-within {
    border: 2px solid #00ff51;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;

  outline: transparent;
  padding-left: 15px;
  padding-right: 15px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormBtn = styled.button`
  display: inline-flex;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;

  cursor: pointer;
  outline: none;

  :hover {
    /* scale: 1.2; */
    /* opacity: 1; */
    /* color: #00ff51; */
  }

  svg {
    width: 40px;
    height: 40px;
    color: #001aff;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      scale: 1.2;
      opacity: 1;
      color: #00ff51;
    }
  }
`;

// export const Input = styled.input`
//   padding: 8px 32px 8px 8px;
//   border-radius: 4px;
//   font: inherit;
// `;

// export const Icon = styled(HiSearch)`
//   width: 20px;
//   height: 20px;
//   position: absolute;
//   right: 6px;
// `;
