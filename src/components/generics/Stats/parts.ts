import styled from "styled-components";

export const Stat = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 90%;
  margin: ${({ theme }) => theme.styles.margins.small} 0;

  font-size: ${({ theme }) => theme.styles.font_sizes.small};
  color: ${({ theme }) => theme.colors.primary};
`;
