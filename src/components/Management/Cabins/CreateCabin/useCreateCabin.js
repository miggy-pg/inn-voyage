import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as useCreateCabinAPI } from "../../../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();

  // - We're using React Query's `useMutation` hook to handle a data mutation.
  // - `mutate` is a function that triggers the mutation.
  // - `isLoading` is a flag that indicates whether the mutation is in progress.
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    // `mutationFn` is the function responsible for creating a new cabin.

    mutationFn: useCreateCabinAPI,
    // `onSuccess` is called when the mutation succeeds.

    onSuccess: () => {
      toast.success("New cabin created successfully");

      // Invalidate the "cabins"  query to refresh the data so that new data will appear in the list.
      queryClient.invalidateQueries({ queryKey: ["cabins"] });

      // // Reset the form to empty out the fields
      // reset();
    },
    // Show an error toast with the error message (the error message is custom in the createCabin from apiCabin.js).
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
