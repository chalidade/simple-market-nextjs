import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OraganismNav from "../../components/organisms/nav";
import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import AtomDiv from "../../components/atoms/div";
import MoleculeproductCart from "../../components/molecules/product-cart";
import {productCart} from "../../components/variabels/client";
import { useRouter } from "next/router";


export default function cart() {
  const products = productCart();
  const router   = useRouter();
  return (
    <>
      <OraganismNav />
      <center>
        <div className="container row mt-5">
          <div className="col-md-12">
            <AtomText
              value="Cart"
              customClass="text-left"
              size="36px"
              weight="700"
            />
          </div>
          <div className="col-md-9">
          <MoleculeproductCart products={products}/>
          </div>
          <div className="col-md-3 text-left">
            <div
              style={{
                background: "#F8F8F8",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              <AtomText value="Total Price" size="18px" />
              <AtomText
                value="$540.00"
                size="18px"
                weight="700"
                margin="-10px 0px 10px 0px"
              />
            </div>
            <div onClick={()=>router.push('/product/billing')}>
            <AtomButton
              value="Checkout"
              bg="#0086CF"
              customClass="p-3 mt-4"
              width="100%"
              radius="10px"
              color="#FFF"
            />
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
