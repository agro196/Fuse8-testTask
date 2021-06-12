import React from "react";
import cx from "clsx";
import { Container } from "../Container";
import "./FilterPanel.scss";

export function FilterPanel({className, value, onFilterChange}) {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  }

  return (
    <div className={cx(className, "filter-panel")}>
      <Container className="filter-panel__wrapper">
        <label className="filter-panel__label" htmlFor="filter">
          Filter
        </label>
        <input
          value={value}
          onChange={handleChange}
          className="filter-panel__input"
          type="text"
          id="filter"
          name="filter"
        />
      </Container>
    </div>
  );
}
