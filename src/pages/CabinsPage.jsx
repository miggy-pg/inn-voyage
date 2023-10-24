import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import "../styles/global.css";
import { getCabins, deleteCabin } from "../services/apiCabins";
import toast from "react-hot-toast";

function Cabin({ id: cabinId, name, maxCapacity, regularPrice, discount }) {
  const queryClient = useQueryClient();

  // we can immediately pass the API function from apiCabins.js to 'mutationFn'
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Successfully deleted cabin");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message), // the error message here is accessing the error message which is customizable
  }); // from the API deleteCabin function (line 17)

  return (
    <div className="flex flex-wrap gap-4 ">
      <div className="flex sm:col-span-12 md:col-span-8 sm:w-full md:w-8/12 lg:w-full items-center">
        <div className="text-start ps-4">
          {/* <h5 className="mb-3">Software Engineer</h5> */}
          <span className="truncate me-3">
            <i className="fa fa-map-marker-alt text-primary me-2"></i>
            {name}
          </span>
          <span className="truncate me-3">
            <i className="far fa-clock text-primary me-2"></i>
          </span>
          <span className="truncate me-0">
            <i className="far fa-money-bill-alt text-primary me-2"></i>
            {regularPrice}
          </span>
        </div>
        <div className="sm:col-span-12 md:col-span-8 lg:col-span-12 sm:w-full md:w-4/12 lg:w-full flex flex-col items-start md:items-end justify-center">
          <div className="flex mb-3">
            <button onClick={() => mutate(cabinId)} disabled={isDeleting}>
              Delete
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Book Cabin
            </button>
          </div>
          <small className="truncate">
            <i className="far fa-calendar-alt text-primary me-2"></i>
            Capacity: {maxCapacity}
          </small>
          <small className="truncate">
            <i className="far fa-calendar-alt text-primary me-2"></i>
            Discount: {discount}
          </small>
        </div>
      </div>
    </div>
  );
}

export default function Cabins() {
  // queryFn should return a promise
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  console.log("isLoading: ", isLoading);
  console.log("cabins: ", cabins);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="w-4/5 py-5 mx-auto">
      <div className="container">
        <h1 className="text-center mb-5 ">Cabins</h1>
        <div className="tab-className text-center wow fadeInUp">
          <div className="">
            <div className="p-0">
              <div className="border border-transparent rounded-lg shadow-md hover:shadow-lg transition duration-500 p-4 mb-4">
                {!isLoading &&
                  cabins.map((cabin) => (
                    <Cabin
                      key={cabin.id}
                      id={cabin.id}
                      name={cabin.name}
                      maxCapacity={cabin.maxCapacity}
                      regularPrice={cabin.regularPrice}
                      discount={cabin.discount}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
