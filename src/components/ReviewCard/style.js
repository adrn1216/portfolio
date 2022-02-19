import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 80%;
  height: 150px;
  margin: auto;
  left: 165px;
  top: 100px;
  border-radius: 8px;
  padding: 24px 40px;
  background-color: var(--filler-color);
  font-family: var(--primary-font);
  text-align: left;
  color: var(--gray-color);
  h3 {
    font-size: 34px;
    font-weight: 500;
    letter-spacing: 0.25px;
    margin: 0;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.44px;
    margin: 0;
  }
`;
