// Button.tsx (src/components/common/Button.tsx)
// : 공통 컴포넌트

import styled from "@emotion/styled";
import { theme } from "./theme";

export const Button = styled.button`
  padding: 0.9rem;
  background: ${theme.colors.primary};
  color: #fff;
  font-weight: 600;
  border-radius: ${theme.radius.base};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.secondary};
  }
`;