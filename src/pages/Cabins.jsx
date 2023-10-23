import "../styles/global.css";

export default function Cabins() {
  return (
    <div className="w-4/5 py-5 mx-auto">
      <div className="container">
        <h1 className="text-center mb-5 ">Cabins</h1>
        <div className="tab-className text-center wow fadeInUp">
          {/* <ul className="flex flex-wrap pl-0 mb-0 list-none justify-center border-b-[1px]">
            <li className="flex-auto text-center">
              <a
                className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <h6 className="mt-n1 mb-0">All</h6>
              </a>
            </li>
            <li className="flex-auto text-center">
              <a
                className="d-flex align-items-center text-start mx-3 pb-3"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <h6 className="mt-n1 mb-0">Booked</h6>
              </a>
            </li>
            <li className="flex-auto text-center">
              <a
                className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <h6 className="mt-n1 mb-0">Discounts</h6>
              </a>
            </li>
          </ul> */}
          <div className="">
            <div className="p-0">
              <div className="border border-transparent rounded-lg shadow-md hover:shadow-lg transition duration-500 p-4 mb-4">
                <div className="flex flex-wrap gap-4 ">
                  <div className="flex sm:col-span-12 md:col-span-8 sm:w-full md:w-8/12 lg:w-full items-center">
                    <div className="text-start ps-4">
                      <h5 className="mb-3">Software Engineer</h5>
                      <span className="truncate me-3">
                        <i className="fa fa-map-marker-alt text-primary me-2"></i>
                        New York, USA
                      </span>
                      <span className="truncate me-3">
                        <i className="far fa-clock text-primary me-2"></i>Full
                        Time
                      </span>
                      <span className="truncate me-0">
                        <i className="far fa-money-bill-alt text-primary me-2"></i>
                        $123 - $456
                      </span>
                    </div>
                    <div className="sm:col-span-12 md:col-span-8 lg:col-span-12 sm:w-full md:w-4/12 lg:w-full flex flex-col items-start md:items-end justify-center">
                      <div className="flex mb-3">
                        <button
                          type="button"
                          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          Book Cabin
                        </button>
                      </div>
                      <small className="truncate">
                        <i className="far fa-calendar-alt text-primary me-2"></i>
                        Capacity: 4
                      </small>
                      <small className="truncate">
                        <i className="far fa-calendar-alt text-primary me-2"></i>
                        Bed: Queen
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y) * -1);margin-right:calc(var(--bs-gutter-x) / -2);margin-left:calc(var(--bs-gutter-x) / -2)
