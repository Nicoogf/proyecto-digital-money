import { useDispatch, useSelector } from "react-redux";
import { AppDispatch , rootState } from "./store";

export const useAppDispatch = () => useDispatch()
export const useAppSelector =  useSelector