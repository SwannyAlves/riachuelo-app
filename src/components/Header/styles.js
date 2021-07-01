import styled from "styled-components";

export const CustomHeader = styled.section`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
  background-color: white;
  /* position: fixed; */
`;

export const CustomHeaderContainer = styled.div`
  margin: auto;
  width: 80%;
  max-width: 1200px;
`;

export const CustomHeaderMobile = styled.div`
  display: none;
  margin-bottom: 25px;
  @media (max-width: 1200px) {
    .header__mobile {
      display: flex;
      align-items: center;
    }
  }
`;

export const CustomHeaderMobileDrawer = styled.div`
  width: 24px;
  opacity: 54%;
  display: none;
  text-transform: lowercase;
  font-size: 0.5625rem;
  font-weight: 400;
  line-height: 0;
`;

export const CustomHeaderImg = styled.img`
  height: 25px;
  transform: translateY(10px);
  width: 150px;
`;

export const HeaderLogo = styled.h1`
  .header__logo {
    height: 70px;
    line-height: 70px;
    text-align: center;
  }

  @media (max-width: 1200px) {
    .header__logo {
      flex-grow: 1;
    }
  }
`;

export const MenuMobileTitle = styled.p`
  text-transform: lowercase;
  font-size: 0.5625rem;
  font-weight: 400;
  line-height: 0;
`;

export const CustomHeaderDesktop = styled.div`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 95%;
  max-width: 1200px;
`;

export const CustomSearch = styled.div`
  position: relative;
  margin: 20px 0 20px 0;

  img {
    width: 16px;
    opacity: 26%;
    top: 8px;
    position: absolute;
    padding-left: 10px;
    color: rgba(0, 0, 0, 0.26);
    line-height: 40px;
  }

  input {
    height: 30px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding-left: 40px;
  }

  input:hover {
    border-color: #000;
  }

  input::placeholder {
    font-size: 10px;
    font-weight: 600;
    font-family: "Open Sans";
    color: #9b9b9b;
  }
`;
