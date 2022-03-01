import styled from "styled-components";
export const LandingPageContainer = styled.div``;

export const ContactMeContainer = styled.section`
  max-width: 1080px;
  margin: 64px auto;
  text-align: center;
  h1 {
    font-family: var(--primary-font);
    font-size: 60px;
    font-weight: 700;
    line-height: 71px;
    letter-spacing: -0.5px;
    color: var(--white-color);
    margin: 0;
  }
  p {
    font-family: var(--primary-font);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.15000000596046448px;
    color: var(--white-color);
  }
`;

export const StyledForm = styled.form`
  width: fit-content;
  padding: 24px;
  background: var(--edges-color);
  border-radius: 8px;
  margin: 44px auto;
  text-align: left;
  label {
    font-family: var(--primary-font);
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.4399999976158142px;
    color: var(--white-color);
  }
  input,
  textarea {
    font-family: var(--primary-font);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 20px;
    background: var(--filler-color);
    border: 1px solid var(--gray-color);
    box-sizing: border-box;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0px;
    outline: 0;
    color: var(--white-color);
    margin-bottom: 24px;
  }
  input {
    height: 60px;
    width: 100%;
    min-width: 280px;
    max-width: 399px;
  }
  textarea {
    width: 100%;
    resize: none;
  }
`;
