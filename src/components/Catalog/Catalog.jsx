import React from "react";
import cx from "clsx";
import { Product } from "../Product";
import { Button } from "../Button";
import { Container } from "../Container";
import "./Catalog.scss";

export function Catalog({ className, data, onShowMore, hasMore, ...props }) {
  return (
    <section className={cx(className, "catalog")} {...props}>
      <Container className="catalog__wrapper">
        <h2 className="visually-hidden">Housing catalog</h2>
        <ul className="catalog__list">
          {data.map((card) => (
            <li key={card.id} className="catalog__item">
              <Product {...card} />
            </li>
          ))}
        </ul>
        {hasMore && (
          <Button className="catalog__show-button" onClick={onShowMore}>
            See more
          </Button>
        )}
      </Container>
    </section>
  );
}
