import {
  BreadcrumbsDetailItems,
  BreadcrumbsSeparator,
  BreadcrumbsDetailMain,
  BreadcrumbsDetailList,
} from "./styles";

function BreadcrumbItemDetail({ link, name }) {
  return (
    <BreadcrumbsDetailItems>
      {link ? (
        <>
          <a href={link}>{name}</a>
          <BreadcrumbsSeparator>/</BreadcrumbsSeparator>
        </>
      ) : (
        <span>{name}</span>
      )}
    </BreadcrumbsDetailItems>
  );
}

function Breadcrumbs({ name }) {
  return (
    <BreadcrumbsDetailMain>
      <nav>
        <BreadcrumbsDetailList>
          <BreadcrumbItemDetail link="home" name="Home" />
          <p>{name}</p>
        </BreadcrumbsDetailList>
      </nav>
    </BreadcrumbsDetailMain>
  );
}

export default Breadcrumbs;
