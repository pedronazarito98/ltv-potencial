import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: #eaf1ff;
  border: 1px solid var(--text-color);
  border-radius: 3px;
  padding: 16px 4px 16px 18px;
  margin: 8px;
  
  width: 100%;
  max-width: 338px;

  &::placeholder {
    text-align: left;
    font-weight: 500;
    color: var(--text-color);
  }
`;
