import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  /* padding: 8px 0; */

  list-style: none;
`;

export const Item = styled.li`
  max-width: 100px;
  /* height: auto; */
  /* display: flex; */
  /* align-items: center; */
  /* padding: 5px 0; */
`;

export const Name = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const Character = styled.p`
  font-size: 14px;
`;

export const CharacterTitle = styled.span`
  font-weight: 500;
`;
