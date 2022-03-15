import { useAppSelector } from "../../../store";

export const useWish = () =>
  useAppSelector((state) => {
    return state.wishes.wishes.content;
  });

export const useUniqueWish = (id?: number | string) =>
  useAppSelector((state) => {
    return state.wishes.wishes.content?.find((value) => value.id === id);
  });
