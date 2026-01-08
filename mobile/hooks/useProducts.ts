import { useApi } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types";
import { useAuth } from "@clerk/clerk-expo";

const useProducts = () => {
  const api = useApi();
  const { isLoaded, isSignedIn } = useAuth();

  const result = useQuery({
    queryKey: ["products"],
    enabled: isLoaded && isSignedIn,
    queryFn: async () => {
      const { data } = await api.get<Product[]>("/products");
      return data;
    },
  });

  return result;
};

export default useProducts;
