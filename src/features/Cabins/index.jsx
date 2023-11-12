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
import { useEffect, useState } from "react";
import SortBy from "../../components/Common/SortBy";

export default function Cabins() {
  const { isLoading, cabins, error } = useCabins();

  // const filteredItems =
  //   cabins.length > 0 ? cabins.filter((item) => !item.discount) : cabins;

  // const [useFilter, setUseFilter] = useState("");

  // useEffect(() => {
  //   if (useFilter === "no-discount") {
  //     const filteredItems =
  //       cabins.length > 0 ? cabins.filter((item) => !item.discount) : cabins;
  //     console.log(filteredItems);
  //   }

  //   if (useFilter === "with-discount") {
  //     const filteredItems =
  //       cabins.length > 0 ? cabins.filter((item) => item.discount > 0) : cabins;
  //     console.log(filteredItems);
  //   }
  //   setUseFilter("");
  // }, [useFilter, cabins]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <NavBar>
        <UserSearch />
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
            { value: "regularPrice - asc", label: "Sort by price (low first)" },
            {
              value: "regularPrice - desc",
              label: "Sort by price (high first)",
            },
            {
              value: "maxCapacity - asc",
              label: "Sort by capacity (low first)",
            },
            {
              value: "maxCapacity - desc",
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
                  data={cabinHeaders}
                  render={(header) => (
                    <Table.Column key={header} header={header} />
                  )}
                />
                <Table.Body>
                  {!isLoading &&
                    cabins.map((cabin) => (
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
      {/* <Pagination /> */}

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
