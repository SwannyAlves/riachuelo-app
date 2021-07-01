import styled from "styled-components";

export const ProductCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px 12px 0;
`;

export const Card = styled.div`
  border: 1px solid white;
  padding: 8px;
  /* margin-bottom: 60px; */
`;

export const ButtomSizeStyle = styled.button`
  background-color: white;
  border-radius: 4px;
  width: 26px;
  height: 24px;
  margin-right: 5px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  cursor: pointer;
  font-size: 8px;
  /* :hover {
    background-color: black;
    color: white;
  } */
  background-color: ${({ isSelected }) => (isSelected ? "#000" : "#fff")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
`;

export const CardInfo = styled.div`
  width: 40%;
`;

export const CardImg = styled.img`
  max-width: 500px;
  /* max-height: 260px; */
  :hover {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.14),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const CardDetailDescription = styled.p`
  white-space: normal;
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);

  margin-bottom: 10px;
`;

export const SizeStyle = styled.p`
  white-space: normal;
  font-size: 10px;
  margin-bottom: 5px;
`;

export const CardPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 40px 0 40px 0;
  color: red;
  width: 100%;
`;

export const ButtomPriceStyle = styled.button`
  background-color: red;
  color: white;
  border-radius: 4px;
  width: 70%;
  height: 30px;
  margin: 5px 0 5px 0;
  border: 1px solid rgba(0, 0, 0, 0.87);
  cursor: pointer;
  font-size: 10px;
  margin-bottom: 20px;
`;

export const ButtomPriceStyleAdd = styled.button`
  background-color: green;
  border-radius: 4px;
  width: 70%;
  height: 30px;
  margin: 5px 0 5px 0;
  border: 1px solid rgba(0, 0, 0, 0.87);
  cursor: pointer;
  font-size: 10px;
  color: white;
`;

export const CardPriceStyle = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 40px 0 40px 0;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const CardSize = styled.div`
  margin: 40px 0 40px 0;
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
