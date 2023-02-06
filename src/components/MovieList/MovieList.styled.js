import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  /* display: inline-flex; */
  /* align-items: center; */
  /* padding: 5px 0; */
  /* color: #000000; */

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  /* padding: 5px 0; */
  color: #0000ff;
  text-decoration: none;
  font-weight: 500;
  /* text-transform: uppercase; */

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  :hover {
    color: #ff4500;
  }
`;
