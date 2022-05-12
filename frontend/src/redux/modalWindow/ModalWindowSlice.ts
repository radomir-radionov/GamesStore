import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModalWindowState {
  modalType: string;
  isModalOpen: boolean;
}

const initialState: IModalWindowState = {
  modalType: "",
  isModalOpen: false,
};

export const modalWindowSlice = createSlice({
  name: "MODAL_WINDOW",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.modalType = payload.type;
      state.isModalOpen = true;
    },
    closeModal: () => initialState,
  },
});

export const { openModal, closeModal } = modalWindowSlice.actions;

export default modalWindowSlice.reducer;
