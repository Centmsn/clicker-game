import styled from "styled-components";

export const Title = styled.header`
  margin-bottom: 30px;
  padding-top: 30px;

  font-size: 38px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
