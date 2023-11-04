import { useContext } from "react";
import "../../styles/global.css";
import { CabinContext } from "../../contexts/cabinProvider.jsx";
import { NavBar } from "../../components/Common/NavBar";
import { Pagination } from "../../components/Common/Pagination";
import AddCabin from "../../components/Management/Cabins/AddCabin.jsx";
import EditCabin from "../../components/Management/Cabins/EditCabin.jsx";
import Delete from "../../components/Common/Delete";
import UserSearch from "../../components/Common/UserSearch";
import TableHeader from "../../components/Common/TableHeader";
import CabinList from "../../components/Management/Cabins/CabinList.jsx";
import Button from "../../components/Common/Button";

export default function Cabins() {
  const { cabins, isLoading, setExpandCreate } = useContext(CabinContext);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <NavBar>
        <UserSearch />
        <Button
          onClick={() => setExpandCreate((curr) => !curr)}
          $size="medium"
          $variations="primary"
        >
          Add new cabin
        </Button>
      </NavBar>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-600">
                <TableHeader type="cabins" />
                {!isLoading &&
                  cabins.map((cabin) => (
                    <CabinList
                      key={cabin.id}
                      id={cabin.id}
                      name={cabin.name}
                      maxCapacity={cabin.maxCapacity}
                      regularPrice={cabin.regularPrice}
                      discount={cabin.discount}
                    >
                      <Delete cabinId={cabin.id} />
                    </CabinList>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />

      <AddCabin />
      <EditCabin />
    </>
  );
}

// return (
//   <>
//     <NavBar setExpandCreate={setExpandCreate}></NavBar>
//     <div className="flex flex-col">
//       <div className="overflow-x-auto">
//         <div className="inline-block min-w-full align-middle">
//           <div className="overflow-hidden shadow">
//             <table className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-600">
//               <TableHeader />
//               <BookingList
//                 setExpandedUpdate={setExpandEdit}
//                 setExpandDelete={setExpandDelete}
//               />
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>

//     <Pagination />
//     <EditBooking expandEdit={expandEdit} setExpandEdit={setExpandEdit} />
//     <ValidateDelete
//       expandDelete={expandDelete}
//       setExpandDelete={setExpandDelete}
//     />
//     <AddBooking
//       expandCreate={expandCreate}
//       setExpandCreate={setExpandCreate}
//     />
//   </>
// );
