import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OraganismNav from "../../components/organisms/nav";
import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import AtomDiv from "../../components/atoms/div";

export default function AtomTable() {
  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            <th className="text-secondary" style={{ width: "50%" }}>
              Product
            </th>
            <th className="text-secondary" style={{ width: "20%" }}>
              Price
            </th>
            <th className="text-secondary" style={{ width: "10%" }}>
              Qty
            </th>
            <th className="text-secondary" style={{ width: "20%" }}>
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="row">
                <div className="col-md-3">
                  <AtomDiv
                    border="1px solid #DEDEDE"
                    radius="50px"
                    width="71px"
                    height="71px"
                    image="/product/product_3.svg"
                    bgRepeat="no-repeat"
                    bgPosition="center"
                    bgSize="70%"
                  />
                </div>
                <div className="col-md-9">
                  <AtomText
                    size="14px"
                    lineHeight="20px"
                    weight="400"
                    value="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment Material PU Leather ORIGINAL"
                  />
                </div>
              </div>
            </td>
            <td>
              <AtomText value="$50.00" size="18px" weight="700" />
            </td>
            <td>
              <AtomText value="1" size="18px" weight="700" />
            </td>
            <td>
              <AtomText value="$50.00" size="18px" weight="700" />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
