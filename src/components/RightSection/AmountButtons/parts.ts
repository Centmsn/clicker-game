import styled from "styled-components";
import Button from "components/generics/Button";

export const Wrapper = styled.div`
  margin: 25px auto;

  width: 90%;
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledButton = styled(Button)`
  width: 20%;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  padding: 10px 0;

  border-top: 1px solid ${({ theme }) => theme.colors.black};
`;
