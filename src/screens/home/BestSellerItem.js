/**
 * @breif Render best seller item
 * @param {String} imageSrc Image source
 * @param {String} text Image text
 * @returns
 */
const BestSellerItem = ({ imageSrc, text }) => {
  return (
    <div className="best-seller-item" style={{ backgroundImage: imageSrc }}>
      <span className="best-seller-item__text">{text}</span>
    </div>
  );
};

export default BestSellerItem;
