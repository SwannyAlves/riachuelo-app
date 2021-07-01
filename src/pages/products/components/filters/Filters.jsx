import {
  FiltersItem,
  FiltersLabel,
  FiltersImg,
  FiltersMain,
  FiltersList,
} from "./styles";

function FilterItem({ label }) {
  return (
    <FiltersItem>
      <FiltersLabel>{label}</FiltersLabel>
      <FiltersImg src="assets/filter.svg" alt="filtro" />
    </FiltersItem>
  );
}

function Filters({ filters }) {
  return (
    <FiltersMain>
      <FiltersList>
        {filters.map((f) => (
          <FilterItem key={f.id} label={f.label} />
        ))}
      </FiltersList>
    </FiltersMain>
  );
}

export default Filters;
