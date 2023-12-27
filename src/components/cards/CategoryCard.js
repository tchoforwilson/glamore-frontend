import React from "react";
import styles from "./CategoryCard.module.scss";

export default function CategoryCard({ category, className = '', ...otherProps }) {
  return (
    <div className={`${styles["category-card"]} ${className}`} style={{
      '--background': category.background ?? 'firebrick',
      '--foreground': category.foreground ?? 'white',
    }}>
      <div className={styles["category-card__image"]}>
        <img
          className="size-full"
          src={category.image}
          alt={`Glamore ${category.name}`}
        />
      </div>
      <div className={styles["category-card__content"]}>
        <span className={styles["category-card__name"]}>{category.name}</span>
        <span className={styles["category-card__info"]}>
          {`${category.products?.length ?? 0} products`}
        </span>
      </div>
    </div>
  );
}
