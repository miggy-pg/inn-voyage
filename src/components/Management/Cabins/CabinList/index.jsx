import { FaCopy, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useContext } from "react";

import Button from "../../../Common/Button/index.jsx";
import Delete from "../../../Common/Delete/index.jsx";
import EditCabin from "../EditCabin/index.jsx";
import Row from "../../../Common/Row/index.jsx";
import useCreateCabin from "../CreateCabin/useCreateCabin.js";

import { CabinContext } from "../../../../contexts/cabinProvider.jsx";

export default function CabinList(props) {
  const { setExpandEdit, setExpandDelete } = useContext(CabinContext);
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    props;
  const { isCreating, createCabin } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
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
      <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
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
              {id}
            </div>
          </Row>
          <Row type="default">
            <img
              className="h-12 w-12 flex-shrink-0"
              src={image}
              alt="imac image"
            />
          </Row>
          <Row type="default">{name}</Row>
          <Row type="default">{maxCapacity}</Row>
          <Row type="default">{regularPrice}</Row>
          {discount ? (
            <Row type="default">{discount}</Row>
          ) : (
            <span>&mdash;</span>
          )}
          <Row type="default">{discount}</Row>
          {/* <Row type="default">{description}</Row> */}

          <Row type="actionButton">
            <Button
              $variations="primaryBlue"
              $size="medium"
              // onClick={handleDuplicate()}
            >
              <FaCopy />
            </Button>
            <Button
              $variations="primaryBlue"
              $size="medium"
              onClick={() => setExpandEdit((curr) => !curr)}
            >
              <FaPencilAlt />
            </Button>
            <Button
              $variations="danger"
              $size="medium"
              onClick={() => setExpandDelete((curr) => !curr)}
            >
              <FaTrash />
            </Button>
          </Row>
        </tr>
      </tbody>
      <Delete cabinId={id} />
      <EditCabin cabinToEdit={props} />
    </>
  );
}
