import { useContext } from "react";

import { NavBar } from "../../components/Common/NavBar";
import { Pagination } from "../../components/Common/Pagination";
import Button from "../../components/Common/Button";
import UserSearch from "../../components/Common/UserSearch";
import CreateCabin from "../../components/Management/Cabins/CreateCabin";
import CabinList from "../../components/Management/Cabins/CabinList";

import Table from "../../components/Common/Table";

import { CabinContext } from "../../contexts/cabinProvider";

import useCabins from "../../hooks/useCabins";

import { cabinHeaders } from "../../components/Common/TableHeader/constants";
import "../../styles/global.css";
import Modal from "../../components/Common/Modal";

export default function Cabins() {
  // const { setExpandCreate } = useContext(CabinContext);
  const { isLoading, cabins, error } = useCabins();

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
                        description={cabin.description}
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

      <CreateCabin />
    </>
  );
}
