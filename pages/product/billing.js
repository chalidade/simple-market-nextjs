import OraganismNav from "../../components/organisms/nav";
import AtomDiv from "../../components/atoms/div";
import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import MoleculeProductCartBilling from "../../components/molecules/product-cart-billing";
import {useRouter} from "next/router";

export default function ProductBilling() {
  const router = useRouter();

  return (
    <>
      <OraganismNav />
      <center>
        <div className="row container mt-5">
          <div className="col-md-9 text-left">
            <AtomText value="Billing Info" size="36px" weight="700" />
            <AtomText
              value="Invoice : 13.04.2020.1"
              size="24px"
              color="#646464"
              margin="-15px 0px 0px 0px"
            />
            <div className="row mt-5 pr-5">
              <div className="col-md-6">
                <AtomText value="Name" size="18px" />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6">
                <AtomText value="Email" size="18px" />
                <input className="form-control" type="text" />
              </div>
            </div>
            <div className="row mt-5 pr-5">
              <div className="col-md-6">
                <AtomText value="Nomor Telpon" size="18px" />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-6">
                <AtomText value="Keterangan" size="18px" />
                <input className="form-control" type="text" />
              </div>
            </div>
            <div className="row mt-5 pr-5">
              <div className="col-md-12">
                <AtomText value="Alamat" size="18px" />
                <textarea className="form-control" rows="8"> </textarea>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="p-4"
              style={{
                background: "#F8F8F8",
                borderRadius: "10px",
                height: "560px",
              }}
            >
              <MoleculeProductCartBilling />
              <div
                className="row text-left"
                style={{ position: "absolute", bottom: "80px", width: "100%" }}
              >
                <div className="col-6">
                  <AtomText value="Total Price :" size="14px" />
                </div>
                <div className="col-6">
                  <AtomText value="$540.00" weight="800" size="14px" />
                </div>
              </div>
            </div>
            <div onClick={()=>router.push('/product/pay')}>
            <AtomButton
              value="Pay"
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
