import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OraganismNav from "../../components/organisms/nav";
import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import AtomDiv from "../../components/atoms/div";

export default function AtomTable({ products }) {
  let default_image = "/product/product_1.svg";

  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            <th style={{ width: "50%", color:"#A7A7A7" }}>
              Product
            </th>
            <th style={{ width: "20%", color:"#A7A7A7" }}>
              Price
            </th>
            <th style={{ width: "10%", color:"#A7A7A7" }}>
              Qty
            </th>
            <th style={{ width: "20%", color:"#A7A7A7" }}>
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <>
                <tr>
                  <td>
                    <div className="row">
                      <div className="col-md-3">
                        <AtomDiv
                          border="1px solid #DEDEDE"
                          radius="50px"
                          width="71px"
                          height="71px"
                          image={product ? product.image : default_image}
                          bgRepeat="no-repeat"
                          bgPosition="center"
                          bgSize="60%"
                        />
                      </div>
                      <div className="col-md-9">
                        <AtomText
                          size="14px"
                          lineHeight="20px"
                          weight="400"
                          value={product ? product.title : "Product Title"}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <AtomText value={product ? product.price : "$50.00"} size="18px" weight="700" />
                  </td>
                  <td>
                    <AtomText value={product ? product.qty : "1"} size="18px" weight="700" />
                  </td>
                  <td>
                    <AtomText value={product ? product.total : "$50.00"} size="18px" weight="700" />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
