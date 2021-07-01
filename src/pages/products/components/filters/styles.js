import styled from "styled-components";

export const FiltersItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 14px 12px 0;
  :hover {
    cursor: pointer;
    background-color: rgba(38, 30, 30, 0.04);
  }
`;
export const FiltersLabel = styled.span`
  text-transform: uppercase;
  font-size: 9px;
  font-weight: 600;
  color: #261e1e;
`;

export const FiltersImg = styled.img`
  height: 15px;
  margin-left: 8px;
`;

export const FiltersMain = styled.section`
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
`;

export const FiltersList = styled.ul`
  display: flex;
`;
