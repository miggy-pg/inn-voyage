import { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import StyledFormContainer from "../../../Common/FormContainer/index.jsx";
import Button from "../../../Common/Button/index.jsx";
import { CabinContext } from "../../../../contexts/cabinProvider.jsx";
import FormRow from "../../../Common/FormRow/index.jsx";
import { useForm } from "react-hook-form";
import useEditCabin from "../../../../hooks/useUpdateModal.js";

export default function EditCabin({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { expandEdit, setExpandEdit } = useContext(CabinContext);

  const { isEditing, editCabin } = useEditCabin();

  function onSubmit(data) {
    editCabin({ ...data, image: data.image[0] });
  }

  return (
    <StyledFormContainer $expandEdit={expandEdit}>
      <h5 className="md:text-md mb-4 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 lg:text-2xl">
        Edit cabin
      </h5>
      <Button
        $size="medium"
        $variations="closeTab"
        onClick={() => setExpandEdit((curr) => !curr)}
      >
        <FaWindowClose className="h-8 w-8 fill-current text-slate-400 transition duration-300 ease-in-out hover:text-slate-500 " />
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormRow label="Name" error={errors?.name?.message}>
            <input
              type="text"
              name="name"
              // disabled={isEditing}
              className="md:text-md focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
              placeholder="Type cabin name"
              {...register("name", { required: "Name is required" })}
            />
          </FormRow>

          <FormRow label="Max Capacity" error={errors?.maxCapacity?.message}>
            <input
              type="number"
              name="maxCapacity"
              // disabled={isEditing}
              className="md:text-md focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
              placeholder="Type maximum capacity"
              {...register("maxCapacity", {
                required: "Maximum capacity is required",
                min: {
                  value: 1,
                },
                max: {
                  value: 20,
                },
              })}
            />
          </FormRow>

          <FormRow label="Price" error={errors?.regularPrice?.message}>
            <input
              type="number"
              name="price"
              // disabled={isEditing}
              className="md:text-md focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
              placeholder="₱2999"
              {...register("regularPrice", {
                valueAsNumber: true,
                required: "Price is required",
              })}
            />
          </FormRow>

          <FormRow label="Discount" error={errors?.discount?.message}>
            <input
              type="number"
              name="discount"
              // disabled={isEditing}
              className="md:text-md focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
              placeholder="10"
              {...register("discount", {
                valueAsNumber: true,
                required: "Discount is required",
                min: {
                  value: 1,
                  message: "Capacity must be greater than 0",
                },
                validate: (value) => {
                  value <= getValues().regularPrice ||
                    "Discount must be less than or equal to regular price";
                },
              })}
            />
          </FormRow>

          <FormRow label="Description" error={errors?.description?.message}>
            <textarea
              rows="4"
              // disabled={isEditing}
              className="md:text-md focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
              placeholder="Enter description here"
              {...register("description")}
            />
          </FormRow>

          <FormRow label="Photo">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              {...register("image")}
            />
          </FormRow>

          <span className="bottom-0 left-0 mt-4 flex w-full space-x-4 pb-6 sm:absolute sm:mt-0 sm:px-4">
            {/*  */}
            {/* disabled={isEditing}>  */}
            <Button $size="large" $variations="primary">
              Update
            </Button>
            <Button
              $size="large"
              $variations="secondary"
              className="ml-3"
              onClick={() => setExpandEdit((curr) => !curr)}
            >
              Cancel
            </Button>
          </span>
        </div>
      </form>
    </StyledFormContainer>
  );
}
