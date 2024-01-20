import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding-top: 80px;
  gap: 20px;
`;

export const StyledSelect = styled.div`
  width: 300px;
  .react-select__control {
    min-height: 38px;
  }
  .react-select__menu {
    width: 300px;
  }
`;
