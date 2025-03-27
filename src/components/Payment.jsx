import OfferContainer from "./payment/OfferContainer";
import data from "./text/paymentHeader.json";
import BlockHeader from "./tools/BlockHeader";

function Payment(){
    return(
        <div className="payment-container bg-[#ecfbff]">
        <BlockHeader blockname={data.blockname} title={data.title} description={data.description} bgcolor={data.bgcolor}/>
        <OfferContainer />
        </div>
    );
}

export default Payment;