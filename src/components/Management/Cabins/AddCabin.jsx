import { FaWindowClose } from "react-icons/fa";
import { CabinContext } from "../../../contexts/cabinProvider";
import Button from "../../Common/Button";
import StyledFormContainer from "../../Common/FormContainer";
import { useContext } from "react";

export default function AddCabin() {
  const { expandCreate, setExpandCreate } = useContext(CabinContext);

  return (
    <StyledFormContainer $expandCreate={expandCreate}>
      <h5 className="md:text-md mb-4 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 lg:text-2xl">
        New booking
      </h5>
      <Button
        $size="medium"
        $variations="closeTab"
        onClick={() => setExpandCreate((curr) => !curr)}
      >
        <FaWindowClose className="h-8 w-8 fill-current text-slate-400 transition duration-300 ease-in-out hover:text-slate-500 " />
      </Button>

      <form action="#">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              Start Date
            </label>
            <input
              type="text"
              name="title"
              className="md:text-md focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
              placeholder="Type product name"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              End Date
            </label>
            <input
              type="text"
              name="title"
              className="md:text-md focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
              placeholder="Type product name"
              required=""
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              className="md:text-md focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
              placeholder="$2999"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="category-create"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              Technology
            </label>
            <select className="md:text-md focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl">
              <option defaultValue="">Select category</option>
              <option value="FL">Flowbite</option>
              <option value="RE">React</option>
              <option value="AN">Angular</option>
              <option value="VU">Vue</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="description"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              Description
            </label>
            <textarea
              rows="4"
              className="md:text-md focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl"
              placeholder="Enter event description here"
            />
          </div>
          <div>
            <label
              htmlFor="discount-create"
              className="md:text-md mb-2 block text-sm font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              Discount
            </label>
            <select className="md:text-md focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 lg:text-2xl">
              <option defaultValue="">No</option>
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
            </select>
          </div>
          <div className="bottom-0 left-0 mt-4 flex w-full space-x-4 pb-6 sm:absolute sm:mt-0 sm:px-4">
            <Button $size="large" $variations="primary">
              Create
            </Button>
            <Button
              $size="large"
              $variations="secondary"
              className="ml-3"
              onClick={() => setExpandCreate((curr) => !curr)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </StyledFormContainer>
  );
}
