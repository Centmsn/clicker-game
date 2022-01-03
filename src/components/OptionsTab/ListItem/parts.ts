import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  text-align: center;
`;

export const Description = styled.p`
  width: 100%;
  display: block;
  line-height: ${({ theme }) => theme.styles.line_height.tiny};
`;
