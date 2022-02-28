import { StyledButton } from "./style";

export const Button = ({
  type,
  prefixIcon,
  suffixIcon,
  children,
  width,
  onClick,
}) => {
  return (
    <StyledButton type={type} width={width} onClick={onClick}>
      <div>
        {prefixIcon}
        {children}
        {suffixIcon}
      </div>
    </StyledButton>
  );
};
