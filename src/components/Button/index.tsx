import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 0;
  padding: 8px 14px;
  transition: 0.3s;
  background-color: ${({theme, variant}) => theme.colors[variant].main};
  color: ${({theme, variant}) => theme.colors[variant].text};

  :hover {
    background-color: ${({theme, variant}) => theme.colors[variant].light};
  }

  :focus {
    background-color: ${({theme, variant}) => theme.colors[variant].dark};
  }
`

interface ButtonProps {
  /** _Essa prop serve para determinar a árvore de cores no componente_ */
  variant?: 'primary' | 'accent';
  /** _Essa prop serve para determinar se o botão desativa ou não_ */
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function Button({children, ...props}: ButtonProps) {
  return (
    
    <StyledButton
      {...props}
    >
      {children}
      
    </StyledButton>
    
  )
}

Button.defaultProps = {
  disabled: false,
  variant: 'primary',
}
