import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as useUpdateSettingAPI } from "../services/apiSetting";

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  // - We're using React Query's `useMutation` hook to handle a data mutation.
  // - `mutate` is a function that triggers the mutation.
  // - `isLoading` is a flag that indicates whether the mutation is in progress.
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    // `mutationFn` is the function responsible for creating a new cabin.
    mutationFn: useUpdateSettingAPI,

    // `onSuccess` is called when the mutation succeeds.
    onSuccess: () => {
      toast.success("Setting updated successfully");

      // Invalidate the "settings"  query to refresh the data so that new data will appear in the list.
      queryClient.invalidateQueries({ queryKey: ["settings"] });

      // We can pass the reset function here to reset the form after a successful update.
      // However since this is a custom hook, we will have to trigger the reset function
      //  from the component that uses this hook.
      // reset();
    },
    // Show an error toast with the error message (the error message is custom in the createCabin from apiCabin.js).
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
