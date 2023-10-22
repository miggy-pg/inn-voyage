import "../styles/global.css";

export default function Cabins() {
  return (
    <div className="w-full py-5">
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
                <div className="flex flex-wrap gap-4">
                  <div className="flex sm:w-full md:w-8/12 items-center">
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
                  </div>
                  <div className="sm:w-full md:w-4/12 lg:w-full flex flex-col items-start md:items-end justify-center">
                    <div className="flex mb-3">
                      <a className="btn btn-light btn-square me-3" href="">
                        <i className="far fa-heart text-primary"></i>
                      </a>
                      <a className="btn btn-primary" href="">
                        Apply Now
                      </a>
                    </div>
                    <small className="truncate">
                      <i className="far fa-calendar-alt text-primary me-2"></i>
                      Date Line: 01 Jan, 2045
                    </small>
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
