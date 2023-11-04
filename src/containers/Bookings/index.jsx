import { useState } from "react";
import { NavBar } from "../../components/Common/NavBar";
import { Pagination } from "../../components/Common/Pagination";
import Delete from "../../components/Common/Delete";
import TableHeader from "../../components/Common/TableHeader";
import BookingList from "../../components/Management/Booking/BookingList";
import EditBooking from "../../components/Management/Booking/EditBooking";
import AddBooking from "../../components/Management/Booking/AddBooking";

export default function BookPage() {
  const [expandCreate, setExpandCreate] = useState(false);
  const [expandEdit, setExpandEdit] = useState(false);
  const [expandDelete, setExpandDelete] = useState(false);

  return (
    <>
      <NavBar setExpandCreate={setExpandCreate}></NavBar>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-600">
                <TableHeader type="bookings" />
                <BookingList
                  setExpandedUpdate={setExpandEdit}
                  setExpandDelete={setExpandDelete}
                />
              </table>
            </div>
          </div>
        </div>
      </div>

      <Pagination />
      <EditBooking expandEdit={expandEdit} setExpandEdit={setExpandEdit} />
      <Delete expandDelete={expandDelete} setExpandDelete={setExpandDelete} />
      <AddBooking
        expandCreate={expandCreate}
        setExpandCreate={setExpandCreate}
      />
    </>
  );
}
