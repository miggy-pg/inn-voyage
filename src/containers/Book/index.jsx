import { useState } from "react";
import { NavBar } from "../../components/Book/NavBar";
import { Pagination } from "../../components/Book/Pagination";
import { TableHeader } from "../../components/Common/TableHeader";
import { TableBody } from "../../components/Common/TableBody";
import { UpdateForm } from "../../components/Management/Booking/EditBooking";
import { CreateForm } from "../../components/Management/Booking/AddBooking";
import { ValidateDelete } from "../../components/Common/ValidateDelete";

export default function BookPage() {
  const [expandCreate, setExpandCreate] = useState(false);
  const [expandUpdate, setExpandUpdate] = useState(false);
  const [expandDelete, setExpandDelete] = useState(false);

  return (
    <>
      <NavBar setExpandCreate={setExpandCreate}></NavBar>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-600">
                <TableHeader></TableHeader>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                  <TableBody
                    setExpandedUpdate={setExpandUpdate}
                    setExpandDelete={setExpandDelete}
                  ></TableBody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Pagination />

      <UpdateForm
        expandUpdate={expandUpdate}
        setExpandUpdate={setExpandUpdate}
      />

      <ValidateDelete
        expandDelete={expandDelete}
        setExpandDelete={setExpandDelete}
      />

      <CreateForm
        expandCreate={expandCreate}
        setExpandCreate={setExpandCreate}
      />
    </>
  );
}
