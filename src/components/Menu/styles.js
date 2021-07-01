import styled from "styled-components";

export const CustomMenuList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  li {
    margin-right: auto;
  }
`;

export const CustomHeaderMenu = styled.nav`
  margin: auto;
  width: 100%;
  max-width: 1200px;
`;

export const CustomMenu = styled.a`
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 8px;
  font-weight: 600;
  margin-right: 5px;
  :hover {
    border-bottom: 1.5px solid #000;
  }
`;
