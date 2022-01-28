import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 354px;
  left: 165px;
  top: 100px;
  border-radius: 8px;
  padding: 24px;
  background-color: var(--filler-color);
  font-family: var(--primary-font);
  text-align: left;
  color: var(--gray-color);
  flex-grow: 1;
  .icon {
    height: 50px;
    width: 50px;
    margin-right: 14px;
  }
  div {
    text-align: left;
    display: flex;
    text-align: center;
    align-items: flex-end;
  }
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
