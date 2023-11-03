import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import "../../styles/global.css";
import { getCabins, deleteCabin } from "../../services/apiCabins.js";
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
      <div className="flex items-center sm:col-span-12 sm:w-full md:col-span-8 md:w-8/12 lg:w-full">
        <div className="ps-4 text-start">
          {/* <h5 className="mb-3">Software Engineer</h5> */}
          <span className="me-3 truncate">
            <i className="fa fa-map-marker-alt text-primary me-2"></i>
            {name}
          </span>
          <span className="me-3 truncate">
            <i className="far fa-clock text-primary me-2"></i>
          </span>
          <span className="me-0 truncate">
            <i className="far fa-money-bill-alt text-primary me-2"></i>
            {regularPrice}
          </span>
        </div>
        <div className="flex flex-col items-start justify-center sm:col-span-12 sm:w-full md:col-span-8 md:w-4/12 md:items-end lg:col-span-12 lg:w-full">
          <div className="mb-3 flex">
            <button onClick={() => mutate(cabinId)} disabled={isDeleting}>
              Delete
            </button>
            <button
              type="button"
              className="mb-2 mr-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-3xl font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
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
    <div className="mx-auto w-4/5 py-5">
      <div className="container">
        <h1 className="mb-5 text-center ">Cabins</h1>
        <div className="tab-className wow fadeInUp text-center">
          <div className="">
            <div className="p-0">
              <div className="mb-4 rounded-lg border border-transparent p-4 shadow-md transition duration-500 hover:shadow-lg">
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
