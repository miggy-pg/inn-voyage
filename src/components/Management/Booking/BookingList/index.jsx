import { useNavigate } from "react-router-dom";
import Button from "../../../Common/Button";
import Row from "../../../Common/Row";

export default function BookingList({ props }) {
  const {
    id,
    name,
    maxCapacity,
    regularPrice,
    status,
    hasBreakfast,
    cabins: { name: cabinName },
    guests: { fullName },
  } = props;

  const navigate = useNavigate();

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <Row type="checkbox">
        <input
          type="checkbox"
          className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
        />
        <label className="sr-only">checkbox</label>
      </Row>
      <Row type="name">
        <div className="md:text-md text-lg font-semibold text-gray-900 dark:text-white sm:text-sm lg:text-2xl">
          {cabinName}
        </div>
      </Row>
      <Row type="default">{fullName}</Row>
      <Row type="default">Test</Row>
      <Row type="default">{regularPrice}</Row>
      <Row type="default">{status}</Row>
      <Row type="default">{hasBreakfast}</Row>

      <Row type="actionButton">
        <Button
          $variations="primaryBlue"
          $size="medium"
          // onClick={() => setExpandedUpdate((curr) => !curr)}
        >
          Update
        </Button>
        <Button
          $variations="danger"
          $size="medium"
          // onClick={() => setExpandDelete((curr) => !curr)}
        >
          Delete
        </Button>
      </Row>
      <Row>
        <Button
          $variations="primaryBlue"
          $size="medium"
          onClick={() => navigate(`/bookings/${id}`)}
        >
          Detail
        </Button>
      </Row>
    </tr>
  );
}
