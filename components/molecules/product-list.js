import AtomText from "../atoms/text";
import AtomButton from "../atoms/button";

export default function ProductList({ product }) {
  return (
    <>
      <div className="templateProductDiv">
        <div
          className="templateProductImage"
          style={{
            background: `url(${product.image[0]})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <AtomText
          customClass="text-left mt-2"
          value={product.title}
          weight="700"
          size="14px"
        />
        <AtomText
          customClass="text-left"
          value={product.category}
          margin="-10px 0px 0px 0px"
          size="9px"
        />
        <div className="row">
          <div className="col-7">
            <AtomText
              customClass="text-left"
              margin="20px 0px 0px 0px"
              value={product.price}
              weight="700"
              size="18px"
            />
          </div>
          <div className="col-2 mt-3 text-right">
            <img
              className="templateProductCart"
              src="/client/product_cart.svg"
            />
          </div>
          <div className="col-3 mt-3">
            <img
              className="    templateProductLove"
              src="/client/product_love.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
