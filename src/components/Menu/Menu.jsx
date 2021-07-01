import { useContext } from "react";
import CategoriesContext from "../../contexts/CategoriesContext";
import { CustomMenuList, CustomHeaderMenu, CustomMenu } from "./styles";

// eslint-disable-next-line react/prop-types
export function MenuItem({ label }) {
  return (
    <li>
      <CustomMenu href="#home">
        <span>{label}</span>
      </CustomMenu>
    </li>
  );
}

function Menu() {
  const { categories } = useContext(CategoriesContext);
  return (
    <CustomHeaderMenu>
      <CustomMenuList>
        {categories.all &&
          categories.all.map((m) => <MenuItem key={m.id} label={m.label} />)}
      </CustomMenuList>
    </CustomHeaderMenu>
  );
}

export default Menu;
