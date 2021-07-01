import styled from "styled-components";

export const ProductCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px 12px 0;
  max-width: 188px;
  :hover {
    cursor: pointer;
    background-color: rgba(38, 30, 30, 0.04);
  }
`;

export const Card = styled.div`
  cursor: pointer;
  border: 1px solid white;
  padding: 8px;
  :hover {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const CardImg = styled.img`
  max-width: 325px;
  max-height: 260px;
`;

export const CardDescription = styled.p`
  white-space: normal;
  font-size: 9px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const CardPrice = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;

export const Main = styled.main`
  margin: 0 auto;
  width: 80%;
  max-width: 1100px;
  padding: 16px;
`;

export const MainProduct = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ProductRow = styled.div`
  margin: 8px;
`;
export const ProductList = styled.ol`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;
`;
