import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteModal(queryKey, deleteAPI, onCloseModal) {
  const queryClient = useQueryClient();

  // we can immediately pass the API function from apiCabins.js to 'mutationFn'
  const { isLoading: isDeleting, mutate: deleteItem } = useMutation({
    mutationFn: deleteAPI,
    onSuccess: () => {
      toast.success("Successfully deleted cabin");
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
    onError: (err) => toast.error(err.message), // the error message here is accessing the error message which is customizable
    onCloseModal,
  }); // from the API deleteCabin function (line 17)

  return { isDeleting, deleteItem };
}

useDeleteModal.defaultProps = {
  deleteAPI: () => {},
  queryKey: ["cabins"],
};
