import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: ${({ theme }) => theme.styles.paddings.large} ${({ theme }) => theme.styles.paddings.medium};
`;

export const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  text-align: center;
`;

export const Description = styled.p`
  width: 100%;
  display: block;

  line-height: 2;
`;
