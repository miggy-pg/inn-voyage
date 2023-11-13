import Button from "../../components/Common/Button";
import Filter from "../../components/Common/Filter";
import Modal from "../../components/Common/Modal";
import { NavBar } from "../../components/Common/NavBar";
import SortBy from "../../components/Common/SortBy";
import Table from "../../components/Common/Table";
import UserSearch from "../../components/Common/UserSearch";
import useBookings from "../../components/Management/Booking/useBookings";
import { bookingHeaders } from "../../components/Common/TableHeader/constants";
import BookingList from "../../components/Management/Booking/BookingList";
import { useSearchParams } from "react-router-dom";

export default function BookPage() {
  const { isLoading, bookings, error } = useBookings();
  const [searchParams] = useSearchParams();
  console.log("bookings: ", searchParams.get("discount"));

  return (
    <>
      <NavBar>
        <UserSearch />
        {/* <Modal.Open>
          <Button $size="medium" $variations="primary">
            Add new cabin
          </Button>
        </Modal.Open> */}
        {/* <Filter /> */}
        <SortBy
          options={[
            { value: "name-asc", label: "Sort by name (A-Z)" },
            { value: "name-desc", label: "Sort by name (Z-A)" },
            { value: "regularPrice-asc", label: "Sort by price (low first)" },
            {
              value: "regularPrice-desc",
              label: "Sort by price (high first)",
            },
            {
              value: "maxCapacity-asc",
              label: "Sort by capacity (low first)",
            },
            {
              value: "maxCapacity-desc",
              label: "Sort by capacity (high first)",
            },
          ]}
        />
      </NavBar>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <Table>
                <Table.Header
                  data={bookingHeaders}
                  render={(header) => (
                    <Table.Column key={header} header={header} />
                  )}
                />
                <Table.Body>
                  {!isLoading &&
                    bookings.map((cabin) => (
                      <BookingList key={cabin.id} id={cabin.id} props={cabin} />
                    ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
