import styled from "styled-components";

export const Card = styled.div`
  left: 165px;
  border-radius: 8px;
  padding: 30px 40px;
  background-color: var(--filler-color);
  font-family: var(--primary-font);
  text-align: left;
  color: var(--gray-color);
  div {
    display: flex;
    align-items: center;
    text-align: left;
    width: 80%;
    column-gap: 10px;
    img {
      background-color: var(--filler-color);
      border-radius: 8px;
      object-fit: cover;
      height: 35px;
    }
    h3 {
      width: fit-content;
      font-size: 34px;
      font-weight: 500;
      letter-spacing: 0.25px;
      margin: 0;
    }
    div {
      display: flex;
      column-gap: 2px;
      p {
        color: var(--accent-color);
        font-weight: 900;
        font-size: 25px;
        margin: 0;
      }
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.44px;
    margin: 0;
  }
`;
