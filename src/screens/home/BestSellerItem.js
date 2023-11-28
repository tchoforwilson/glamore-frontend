/**
 * @breif Render best seller item
 * @param {String} imageSrc Image source
 * @param {String} text Image text
 * @returns
 */
const BestSellerItem = ({ imageSrc, text }) => {
  return (
    <div className="best-seller-item">
      <img className="best-seller-item__img" src={imageSrc} alt={text} />
      <div className="best-seller-item__text">{text}</div>
    </div>
  );
};

export default BestSellerItem;
