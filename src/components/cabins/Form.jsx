import { useState } from "react";
import { NavBar } from "../book/NavBar";
import { Pagination } from "../book/Pagination";
import { TableHeader } from "../TableHeader";
import { TableBody } from "../TableBody";
import { UpdateForm } from "../book/UpdateForm";
import { CreateForm } from "../book/CreateForm";
import { ValidateDelete } from "../book/ValidateDelete";

export default function Form() {
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
      ></UpdateForm>

      <ValidateDelete
        expandDelete={expandDelete}
        setExpandDelete={setExpandDelete}
      ></ValidateDelete>

      <CreateForm
        expandCreate={expandCreate}
        setExpandCreate={setExpandCreate}
      ></CreateForm>
    </>
  );
}
