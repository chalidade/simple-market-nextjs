import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import AtomDiv from "../../components/atoms/div";
import OraganismNav from "../../components/organisms/nav";
import { useRouter } from "next/router";
import { product } from "../../components/variabels/client";


export default function DetailProduct() {
  const router    = useRouter();
  const products  = product();
  const detail    = products[router.query.id];

  return (
    <>
      <OraganismNav />
      <center>
        <div className="container row">
          <div className="col-md-6 mt-5">
            <AtomDiv
              border="1px solid #DEDEDE"
              radius="10px"
              width="80%"
              height="402px"
              image={detail.image[0]}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="70%"
            />
            <div className="row mt-3" style={{ width: "85%" }}>
              <div className="col-4">
                <AtomDiv
                  border="1px solid #DEDEDE"
                  radius="10px"
                  width="115px"
                  height="115px"
                  image={detail.image[1]}
                  bgRepeat="no-repeat"
                  bgPosition="center"
                  bgSize="70%"
                />
              </div>
              <div className="col-4">
                <AtomDiv
                  border="1px solid #DEDEDE"
                  radius="10px"
                  width="115px"
                  height="115px"
                  image={detail.image[2]}
                  bgRepeat="no-repeat"
                  bgPosition="center"
                  bgSize="70%"
                />
              </div>
              <div className="col-4">
                <AtomDiv
                  border="1px solid #DEDEDE"
                  radius="10px"
                  width="115px"
                  height="115px"
                  image={detail.image[3]}
                  bgRepeat="no-repeat"
                  bgPosition="center"
                  bgSize="70%"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 text-left">
            <AtomButton
              value={detail.category}
              bg="#0086CF"
              radius="5px"
              width="130px"
              padding="10px"
              customClass="text-light"
            />
            <AtomText
              customClass="mt-3"
              value={detail.title}
              size="24px"
              lineHeight="30px"
              weight="700"
            />
            <AtomText value={`Stock : ${detail.stock}`} color="#9D9D9D" size="18px" />
            <AtomText value={detail.price} size="36px" weight="700" />
            <AtomText
              size="14px"
              value={detail.desc}
            />
            <div className="row mt-5">
              <div className="col-5">
                <AtomButton
                  value="Add to Cart"
                  customClass="text-light"
                  padding="12px 55px"
                  radius="10px"
                  bg="#0086CF"
                />
              </div>
              <div className="col-6">
                <button
                  className="templateSingleButton"
                  style={{ marginLeft: "-20px" }}
                >
                  <img src="/client/product_love.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
