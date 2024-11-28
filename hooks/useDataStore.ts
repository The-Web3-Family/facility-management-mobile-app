import { create } from "zustand";

type DataState = {
  data: any[];
  isLoading: boolean;
  error: string | null;
  getData: () => void;
};

const useDataStore = create<DataState>((set) => ({
  data: [],
  isLoading: false,
  error: null,

  getData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/bills.json?key=c83ad9c0"
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      set({ data: result, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useDataStore;
