import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCabins, deleteCabin } from "../services/apiCabins";

export const CabinContext = createContext();

export default function CabninProvider({ children }) {
  const [expandCreate, setExpandCreate] = useState(false);
  const [expandEdit, setExpandEdit] = useState(false);
  const [expandDelete, setExpandDelete] = useState(false);

  // queryFn(line 20) should return a promise
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

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

  console.log("cabins", cabins);

  return (
    <CabinContext.Provider
      value={{
        isLoading,
        cabins,
        isDeleting,
        mutate,
        expandCreate,
        setExpandCreate,
        expandEdit,
        setExpandEdit,
        expandDelete,
        setExpandDelete,
      }}
    >
      {children}
    </CabinContext.Provider>
  );
}
