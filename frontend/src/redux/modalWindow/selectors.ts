import { createSelector } from "@reduxjs/toolkit";

const modal = (state: any) => state.modal;

export const isModalOpenSelector = createSelector(
  modal,
  (state) => state.isModalOpen
);

export const modalTypeSelector = createSelector(
  modal,
  (state) => state.modalType
);
