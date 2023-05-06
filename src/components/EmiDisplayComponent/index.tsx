import {
  sidebarEmiChildContainer,
} from "./styles";
import SemiCircularProgress from "components/SemiCircularProgress";
const EmiDisplayComponent = ({ emiData }:any) => {
  return (
      <div css={(theme) => sidebarEmiChildContainer(theme)}>
        <SemiCircularProgress value="33"/>
        <span>
          <p>Loan Amt</p>
          <p>{`₹ ${emiData?.loanAmt}`}</p>
        </span>
        <span>
          <p>Interest Amt</p>
          <p>{`₹ ${emiData?.interestAmt}`}</p>
        </span>
        <span>
          <p>Total Payable</p>
          <p>{`₹ ${emiData?.total}`}</p>
        </span>
        <span>
          <p>Loan Amount</p>
          <p>{`₹ ${emiData?.loanAmt}`}</p>
        </span>
        <span>
          <p>Interest Rate (p.a)</p>
          <p>{`${emiData?.interestRate} %`}</p>
        </span>
        <span>
          <p>Tenure (years)</p>
          <p>{emiData?.tenure}</p>
        </span>
        <span>
          <p>Equated Monthly Installments (EMI)</p>
          <p>{`₹ ${emiData?.emi}`}</p>
        </span>
      </div>
  );
};

export default EmiDisplayComponent;
