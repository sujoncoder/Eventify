import PaymentForm from "@/components/payform/PaymentForm";

const Payment = ({ params: { eventId } }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Payment Details</h1>
      <PaymentForm eventId={eventId} />
    </div>
  );
};

export default Payment;
