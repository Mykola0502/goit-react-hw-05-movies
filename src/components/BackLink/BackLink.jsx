import { HiArrowLeft } from 'react-icons/hi';

import { BackWrapper, StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <BackWrapper>
      <StyledLink to={to}>
        <HiArrowLeft size="24" />
        {children}
      </StyledLink>
    </BackWrapper>
  );
};
