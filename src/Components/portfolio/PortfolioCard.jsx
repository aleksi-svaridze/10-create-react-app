import Styles from "./Portfolio.module.css";

export const PortfolioCard = ({ card }) => {
  return (
    <div
      className={Styles.portfolio__card}
      style={{ backgroundImage: `url(${card.imgUrl})` }}
    >
      <a href={card.linkUrl} target="_blank">
        Visit
      </a>
    </div>
  );
};
