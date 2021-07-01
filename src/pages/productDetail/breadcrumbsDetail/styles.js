import styled from "styled-components";

export const BreadcrumbsDetailItems = styled.li`
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :not(:last-child):hover {
    text-decoration: underline;
  }
`;
export const BreadcrumbsSeparator = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  user-select: none;
`;

export const BreadcrumbsDetailMain = styled.section`
  margin-bottom: 16px;
  /* margin-top: 150px; */
  font-size: 10px;
  font-weight: 600;
  color: #585858;
`;
export const BreadcrumbsDetailList = styled.ol`
  display: flex;
`;
