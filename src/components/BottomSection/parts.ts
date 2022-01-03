import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: 11/3/13/9;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;

  height: 100%;
  max-width: 33%;
  padding: ${({ theme }) => theme.styles.paddings.medium};
`;

export const CardHeader = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.styles.height.low};
  background: ${({ theme }) => theme.colors.secondary};
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
