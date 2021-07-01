import { useContext } from "react";
import CategoriesContext from "../../../../contexts/CategoriesContext";
import {
  BreadcrumbsItems,
  BreadcrumbsSeparator,
  BreadcrumbsMain,
  BreadcrumbsList,
} from "./styles";

function BreadcrumbItem({ link, name }) {
  return (
    <BreadcrumbsItems>
      {link ? (
        <>
          <a href={link}>{name}</a>
          <BreadcrumbsSeparator>/</BreadcrumbsSeparator>
        </>
      ) : (
        <span>{name}</span>
      )}
    </BreadcrumbsItems>
  );
}

function Breadcrumbs() {
  const { categories } = useContext(CategoriesContext);

  return (
    <BreadcrumbsMain>
      <nav>
        <BreadcrumbsList>
          {categories.current &&
            categories.current.map((c) => (
              <BreadcrumbItem key={c.id} link={c.link} name={c.name} />
            ))}
        </BreadcrumbsList>
      </nav>
    </BreadcrumbsMain>
  );
}

export default Breadcrumbs;
