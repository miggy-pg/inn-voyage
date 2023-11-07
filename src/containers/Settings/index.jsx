import React from "react";
import FormRow from "../../components/Common/FormRow";
import useSettings from "./useSettings";
import useUpdateSetting from "../../components/Management/Settings/useUpdateSetting";

export default function Settings() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      breakfastPrice,
    } = {},
    error,
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleUpdate(e, field) {
    e.preventDefault();

    const { value } = e.target;

    if (!value) return;

    updateSetting({
      [field]: value,
    });
  }

  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2">
      <h3 className="mb-4 text-2xl font-semibold dark:text-white">
        General Settings
      </h3>

      <form action="#">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="first-name"
              className="mb-2 block text-2xl font-medium text-gray-900 dark:text-white"
            >
              Minimum Booking Length
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-2xl"
              placeholder="Bonnie"
              defaultValue={minBookingLength}
              // we are passing two parameters, the "minBookingLength" is the name of the
              // field we want to update
              onBlur={(e) => handleUpdate(e, "minBookingLength")}
              disabled={isUpdating}
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="last-name"
              className="mb-2 block text-2xl font-medium text-gray-900 dark:text-white"
            >
              Maximum Booking Length
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-2xl"
              placeholder="Green"
              defaultValue={maxBookingLength}
              onBlur={(e) => handleUpdate(e, "maxBookingLength")}
              disabled={isUpdating}
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="country"
              className="mb-2 block text-2xl font-medium text-gray-900 dark:text-white"
            >
              Maximum Guest/Booking
            </label>
            <input
              type="text"
              name="country"
              id="country"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-2xl"
              placeholder="United States"
              defaultValue={maxGuestPerBooking}
              onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
              disabled={isUpdating}
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="city"
              className="mb-2 block text-2xl font-medium text-gray-900 dark:text-white"
            >
              Breakfast Price
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-2xl"
              placeholder="e.g. San Francisco"
              defaultValue={breakfastPrice}
              onBlur={(e) => handleUpdate(e, "breakfastPrice")}
              disabled={isUpdating}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}
