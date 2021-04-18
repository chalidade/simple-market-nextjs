import OraganismNav from "../../components/organisms/nav";
import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";

export default function ProductPay() {
  return (
    <>
      <OraganismNav />
      <center>
        <div className="row container text-left mt-5">
          <div className="col-md-12">
            <AtomText
              value="Billing Payment Confirmation"
              size="24px"
              weight="700"
            />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12 mt-4">
                <AtomText value="Invoice" size="18px" />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-12  mt-4">
                <AtomText value="Nomor Telpon" size="18px" />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-12  mt-4">
                <AtomText value="Email" size="18px" />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-12  mt-4">
                <AtomText value="Keterangan" size="18px" />
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-12  mt-4">
              <AtomButton
                value="Confirm"
                bg="#0086CF"
                customClass="p-2 mt-4"
                width="40%"
                radius="10px"
                color="#FFF"
              />
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <img src="/client/client_image_pay_confirm.svg" />
            <center>
            <AtomButton
              value="Upload Receipt"
              bg="#FFF"
              border="solid thin #000"
              customClass="p-2 mt-4"
              width="40%"
              radius="10px"
              color="#000"
            />
            </center>
          </div>
        </div>
      </center>
    </>
  );
}
