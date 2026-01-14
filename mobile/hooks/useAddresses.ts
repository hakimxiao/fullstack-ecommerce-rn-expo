import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useApi } from "@/lib/api";
import { Address } from "@/types";

export const useAddresses = () => {
  const api = useApi();
  const queryClient = useQueryClient();

  const {
    data: addresses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: async () => {
      const { data } = await api.get<{ addresses: Address[] }>(
        "/users/addresses"
      );
      return data.addresses;
    },
  });

  const addAddressesMutation = useMutation({
    // Omit adalah : addressData adalah tipe dari Address tapi tanpa properti _id
    mutationFn: async (addressData: Omit<Address, "_id">) => {
      const { data } = await api.post<{ addresses: Address[] }>(
        "/users/addresses",
        addressData
      );
      return data.addresses;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
  });

  const updateAddressesMutatuion = useMutation({
    mutationFn: async ({
      addressId,
      addressData,
    }: {
      addressId: string;
      //   partial artinya : tipe nya adalah Address tapi mungkin dia hanya mengisi beberapa field saja
      addressData: Partial<Address>;
    }) => {
      const { data } = await api.put<{ addresses: Address[] }>(
        `/users/addresses/${addressId}`,
        addressData
      );
      return data.addresses;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
  });

  const deleteAddressesMutatuion = useMutation({
    mutationFn: async (addressId: string) => {
      const { data } = await api.delete<{ addresses: Address[] }>(
        `/users/addresses/${addressId}`
      );
      return data.addresses;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
  });

  return {
    addresses: addresses || [],
    isLoading,
    isError,
    addAddress: addAddressesMutation.mutate,
    updateAddress: updateAddressesMutatuion.mutate,
    deleteAddress: deleteAddressesMutatuion.mutate,
    isAddingAddress: addAddressesMutation.isPending,
    isUpdatingAddress: updateAddressesMutatuion.isPending,
    isDeletingAddress: deleteAddressesMutatuion.isPending,
  };
};
