import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #0000ff;
  text-decoration: none;
  font-weight: 500;

  transition: color 250ms ease;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  :hover {
    color: #ff4500;
  }
`;
