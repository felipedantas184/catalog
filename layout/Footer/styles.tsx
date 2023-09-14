import styled from "styled-components";
import Link from "next/link";

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
export const Item = styled(Link)`
  color: #E1E1E1;
  font-size: 14px;
  font-weight: 500;
`