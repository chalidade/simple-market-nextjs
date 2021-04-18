import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import AtomDiv from "../../components/atoms/div";
import OraganismNav from "../../components/organisms/nav";

export default function DetailProduct() {
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
              image="/product/product_3.svg"
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
                  image="/product/product_3_1.svg"
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
                  image="/product/product_3_2.svg"
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
                  image="/product/product_3_3.svg"
                  bgRepeat="no-repeat"
                  bgPosition="center"
                  bgSize="70%"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 text-left">
            <AtomButton
              value="Forever Bag"
              bg="#0086CF"
              radius="5px"
              width="115px"
              padding="10px"
              customClass="text-light"
            />
            <AtomText
              customClass="mt-3"
              value="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment Material PU Leather ORIGINAL"
              size="24px"
              lineHeight="30px"
              weight="700"
            />
            <AtomText value="Stock : 50" color="#9D9D9D" size="18px" />
            <AtomText value="$50.00" size="36px" weight="700" />
            <AtomText
              size="14px"
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
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
