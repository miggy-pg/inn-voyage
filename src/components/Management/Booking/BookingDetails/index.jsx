import { useNavigate } from "react-router-dom";
import useBooking from "../useBooking";

export default function BookingDetails() {
  const moveBack = useNavigate();

  const { isLoading, booking, error } = useBooking();
  const { id } = !isLoading && booking;
  console.log("id: ", id);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      BookingDetails #{id}
      <button className="ml-5 bg-red-500" onClick={() => moveBack(-1)}>
        Back
      </button>
    </div>
  );
}
