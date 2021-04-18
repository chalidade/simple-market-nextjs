import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { product } from "../components/variabels/client";
import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculeProductList from "../components/molecules/product-list";
import OraganismNav from "../components/organisms/nav";
import { useRouter } from "next/router";

let products = product();

export default function Hello() {
  const router = useRouter();

  return (
    <>
      <OraganismNav />
      <center>
        <div className="container row p-4">
          <div className="col-md-6 mt-5 text-left">
            <AtomText value="Peduli Digital Market" weight="700" size="48px" />
            <AtomText
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              margin="10px 0px 30px 0px"
              size="14px"
              br="true"
              lineHeight="30px"
            />
            <AtomButton
              value="Browse All Products"
              padding="10px 20px"
              customClass="mr-3"
              radius="10px"
              color="#FFF"
              bg="#0086CF"
              width="176"
              height="43"
            />
            <AtomButton
              value="Follow This Board"
              padding="10px 20px"
              radius="10px"
              color="#787878"
              bg="#F0F0F0"
              width="176"
              height="43"
            />
          </div>
          <div className="col-md-6">
            <img className="p-4 mt-5" src="client/client_image.svg" />
          </div>
        </div>

        <div style={{ background: "#F9F9F9", width: "100%", height: "512px" }}>
          <div className="container row">
            <div className="col-md-12 text-left">
              <AtomText
                margin="50px 0px 30px 20px"
                size="24px"
                value="Forever bag"
                weight="700"
              />
            </div>
            <div
              className="col-md-3"
              onClick={() =>
                router.push({ pathname: "/product/[id]", query: { id: 0 } })
              }
            >
              <MoleculeProductList product={products[0]} />
            </div>
            <div
              className="col-md-3"
              onClick={() =>
                router.push({ pathname: "/product/[id]", query: { id: 1 } })
              }
            >
              <MoleculeProductList product={products[1]} />
            </div>
            <div
              className="col-md-3"
              onClick={() =>
                router.push({ pathname: "/product/[id]", query: { id: 2 } })
              }
            >
              <MoleculeProductList product={products[2]} />
            </div>
            <div
              className="col-md-3"
              onClick={() =>
                router.push({ pathname: "/product/[id]", query: { id: 3 } })
              }
            >
              <MoleculeProductList product={products[3]} />
            </div>

          </div>
        </div>
      </center>
    </>
  );
}
