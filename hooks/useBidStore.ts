import { Bid } from "@/types";
import { create } from "zustand";

type State = {
  bids: Bid[];
};

type Actions = {
  setBids: (bids: Bid[]) => void;
  addBids: (bid: Bid) => void;
};

export const useBidStore = create<State & Actions>((set) => ({
  bids: [],
  setBids: (bids: Bid[]) => {
    set(() => ({
      bids,
    }));
  },
  addBids: (bid: Bid) => {
    set((state) => ({
      bids: !state.bids.find((x) => x.id === bid.id)
        ? [bid, ...state.bids]
        : [...state.bids],
    }));
  },
}));
