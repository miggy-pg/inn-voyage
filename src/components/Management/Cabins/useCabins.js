import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../../services/apiCabins";

export default function useCabins() {
  // queryFn(line 12) should return a promise. Basically this is a function that returns a promise
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}
