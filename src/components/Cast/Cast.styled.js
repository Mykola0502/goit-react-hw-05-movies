import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;

export const Item = styled.li`
  max-width: 100px;
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
