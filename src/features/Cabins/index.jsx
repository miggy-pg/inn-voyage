import { NavBar } from "../../components/Common/NavBar";
import { Pagination } from "../../components/Common/Pagination";
import Button from "../../components/Common/Button";
import UserSearch from "../../components/Common/UserSearch";
import CabinList from "../../components/Management/Cabins/CabinList";

import Table from "../../components/Common/Table";

import useCabins from "../../components/Management/Cabins/useCabins";

import { cabinHeaders } from "../../components/Common/TableHeader/constants";
import "../../styles/global.css";
import Modal from "../../components/Common/Modal";
import CreateCabin from "../../components/Management/Cabins/CreateCabin";
import Delete from "../../components/Common/Delete";
import Filter from "../../components/Common/Filter";
import SortBy from "../../components/Common/SortBy";
import { useSearchParams } from "react-router-dom";

export default function Cabins() {
  const { isLoading, cabins, error } = useCabins();

  const [searchParams] = useSearchParams();

  // FILTER on CLIENT SIDE
  const filteredValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filteredValue === "all") filteredCabins = cabins;
  if (filteredValue === "no-discount")
    filteredCabins =
      cabins.length > 0 ? cabins.filter((item) => !item.discount) : cabins;

  if (filteredValue === "with-discount")
    filteredCabins =
      cabins.length > 0 ? cabins.filter((item) => item.discount > 0) : cabins;

  // SORT
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedItems =
    !isLoading &&
    filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <NavBar>
        {/* <UserSearch /> */}
        <Modal.Open opens="cabin-form">
          <Button $size="medium" $variations="primary">
            Add new cabin
          </Button>
        </Modal.Open>
        <Filter />
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
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"></div>
      <div className="flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table>
                <Table.Header
                  data={cabinHeaders}
                  render={(header) => (
                    <Table.Column key={header} header={header} />
                  )}
                />
                <Table.Body>
                  {!isLoading &&
                    sortedItems.map((cabin) => (
                      <CabinList
                        key={cabin.id}
                        id={cabin.id}
                        image={cabin.image}
                        name={cabin.name}
                        maxCapacity={cabin.maxCapacity}
                        regularPrice={cabin.regularPrice}
                        discount={cabin.discount}
                      />
                    ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>

      <Pagination count={15} />

      <Modal.Window name="cabin-form">
        <CreateCabin />
      </Modal.Window>

      <Modal.Window name="delete-form">
        <Delete />
        {/* <Delete itemId={id} deleteItem={deleteItem} isDeleting={isDeleting} /> */}
      </Modal.Window>

      <Modal.Window name="edit-form">
        <CreateCabin />
        {/* <CreateCabin cabinToEdit={props} /> */}
      </Modal.Window>
    </>
  );
}
