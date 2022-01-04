import { StyledButton } from "./style";

export const Button = ({ type, prefixIcon, children }) => {
  return (
    <StyledButton type={type}>
      <div>
        {prefixIcon}
        {children}
      </div>
    </StyledButton>
  );
};
