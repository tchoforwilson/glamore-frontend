import styles from "./ArticleCard.module.scss";

export default function ArticleCard({ article, className = "" }) {
  return (
    <article className={`${styles["article-card"]} ${className}`}>
      <div className={styles["article-card__inner"]}>
        <img
          src={article.image}
          alt={article.title}
          className="object-cover object-center size-full"
        />
      </div>
      <div className={styles["article-card__overlay"]}></div>
      <h3 className={styles["article-card__title"]}>{article.title}</h3>
    </article>
  );
}
