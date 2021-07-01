import { useContext } from "react";
import FilterContext from "../../contexts/FilterContext";
import Menu from "../Menu/Menu";
import {
  CustomHeader,
  CustomHeaderContainer,
  CustomHeaderMobile,
  CustomHeaderMobileDrawer,
  MenuMobileTitle,
  CustomHeaderDesktop,
  HeaderLogo,
  CustomHeaderImg,
  CustomSearch,
} from "./styles";

function Header() {
  const { setFilter } = useContext(FilterContext);

  return (
    <CustomHeader>
      <CustomHeaderContainer>
        <CustomHeaderMobile>
          <CustomHeaderMobileDrawer>
            <img src="assets/menu.svg" alt="menu" />
            <MenuMobileTitle>menu</MenuMobileTitle>
          </CustomHeaderMobileDrawer>
          <CustomHeaderMobileDrawer>
            <img src="assets/close.svg" alt="fechar menu" />
            <MenuMobileTitle>fechar</MenuMobileTitle>
          </CustomHeaderMobileDrawer>
          <HeaderLogo>
            <CustomHeaderImg src="assets/rchlo.svg" alt="Logo" />
          </HeaderLogo>
        </CustomHeaderMobile>
        <CustomHeaderDesktop>
          <HeaderLogo>
            <CustomHeaderImg src="assets/riachuelo.svg" alt="Logo" />
          </HeaderLogo>
        </CustomHeaderDesktop>
        <CustomSearch>
          <img src="assets/search.svg" alt="lupa" />
          <input
            type="search"
            placeholder="O que você está procurando?"
            onChange={(event) => setFilter(event.target.value)}
          />
        </CustomSearch>
        <Menu />
      </CustomHeaderContainer>
    </CustomHeader>
  );
}
export default Header;
