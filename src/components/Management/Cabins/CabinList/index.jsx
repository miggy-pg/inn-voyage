import { FaCopy, FaPencilAlt, FaTrash } from "react-icons/fa";

import Button from "../../../Common/Button";
import Delete from "../../../Common/Delete";
import EditCabin from "../UpdateCabin";
import Table from "../../../Common/Table";

import useCreateModal from "../../../../hooks/useCreateModal";
import Modal from "../../../Common/Modal";
import CreateCabin from "../CreateCabin";
import useDeleteModal from "../../../../hooks/useDeleteModal";
import {
  deleteCabin,
  createCabin as useCreateCabinAPI,
} from "../../../../services/apiCabins";

export default function CabinList(props) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    props;

  const { isCreating, createItem } = useCreateModal(
    ["cabins"],
    useCreateCabinAPI,
  );
  const { isDeleting, deleteItem } = useDeleteModal(["cabins"], deleteCabin);

  function handleDuplicate() {
    createItem({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <Table.Row type="checkbox">
          <input
            type="checkbox"
            className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
          />
          <label className="sr-only">checkbox</label>
        </Table.Row>
        <Table.Row type="name">
          <span className="md:text-md text-lg font-semibold text-gray-900 dark:text-white sm:text-sm lg:text-2xl">
            {id}
          </span>
        </Table.Row>
        <Table.Row type="default">
          <img
            className="h-12 w-12 flex-shrink-0"
            src={image}
            alt="imac image"
          />
        </Table.Row>
        <Table.Row type="default">{name}</Table.Row>
        <Table.Row type="default">{maxCapacity}</Table.Row>
        <Table.Row type="default">{regularPrice}</Table.Row>
        {discount ? (
          <Table.Row type="status">{discount}</Table.Row>
        ) : (
          <span>&mdash;</span>
        )}

        <Table.Row type="actionButton">
          <Button
            $variations="primaryBlue"
            $size="medium"
            // onClick={handleDuplicate()}
          >
            <FaCopy />
          </Button>
          <Modal.Open opens="edit-form">
            <Button $variations="primaryBlue" $size="medium">
              <FaPencilAlt />
            </Button>
          </Modal.Open>
          <Modal.Open opens="delete-form">
            <Button $variations="danger" $size="medium">
              <FaTrash />
            </Button>
          </Modal.Open>
        </Table.Row>
      </tr>

      <Modal.Window name="delete-form">
        <Delete itemId={id} deleteItem={deleteItem} isDeleting={isDeleting} />
      </Modal.Window>

      <Modal.Window name="edit-form">
        <CreateCabin cabinToEdit={props} />
      </Modal.Window>
    </>
  );
}
