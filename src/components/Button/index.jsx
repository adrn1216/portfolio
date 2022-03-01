import { StyledButton } from "./style";

export const Button = ({
  type,
  prefixIcon,
  suffixIcon,
  children,
  width,
  onClick,
  disabled,
}) => {
  return (
    <StyledButton
      type={type}
      width={width}
      onClick={onClick}
      disabled={disabled}
    >
      <div>
        {prefixIcon}
        {children}
        {suffixIcon}
      </div>
    </StyledButton>
  );
};
