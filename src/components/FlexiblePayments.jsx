import FlexBenefits from "./flexible/FlexBenefits";
import data from "@/components/text/flexBenefits.json";

function FlexiblePayments() {
  return (
    <div className="bg-[#062949] flexiblePay">
      <h2 className="semibold my-4 mt-20 mx-auto text-white">
        Flexible payments
      </h2>
      <FlexBenefits data={data}/>
      <p className="body2 regular my-5 mx-5 text-white text-center">
        NOTE: Only applies to bookings made a minimum of 95 days before the
        trip. For bookings made within 95 days before the trip, see our{" "}
        <a className="text-[#33affd]">Terms and conditions</a>.
      </p>
    </div>
  );
}

export default FlexiblePayments;
