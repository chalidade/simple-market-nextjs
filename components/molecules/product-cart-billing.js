import AtomDiv from "../../components/atoms/div";
import AtomText from "../../components/atoms/text";
import { productCart } from "../../components/variabels/client";

export default function ProductCartBilling() {
  const cart        = productCart();
  let default_image = "/product/product_1.svg";
  return (
    <>
      {cart.map((product) => {
        return (
          <>
            <div className="row mt-2">
              <div className="col-3">
                <AtomDiv
                  image={product ? product.image : default_image}
                  width="50px"
                  border="1px solid #DCDCDC"
                  bgRepeat="no-repeat"
                  bgPosition="center"
                  bgSize="60%"
                  height="50px"
                  radius="50px"
                />
              </div>
              <div className="col-9 text-left">
                <AtomText value={product ? product.sku : "#SKU9011"} weight="700" size="14px" />
                <AtomText
                  value={product ? product.price : "$50.00"}
                  weight="700"
                  color="#9E9E9E"
                  size="14px"
                  margin="-15px 0px 0px 0px"
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
