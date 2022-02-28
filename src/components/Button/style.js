import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  outline: 0;
  border: 0;
  height: 48px;
  width: ${(props) => (props.width ? props.width : "169px")};
  border-radius: 5px;
  padding: 16px, 20px, 16px, 20px;
  font-family: var(--primary-font);
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  color: var(--white-color);
  transition: ease-out 300ms;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    * {
      margin: 0 5.5px;
    }
  }

  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: var(--primary-color);
      :hover {
        background-color: var(--hover-color);
        transition: ease-in 300ms;
      }
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: transparent;
      border: 1px solid var(--white-color);
      :hover {
        opacity: 50%;
        transition: ease-in 300ms;
      }
    `};
`;
