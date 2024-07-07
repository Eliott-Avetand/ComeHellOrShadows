import { ApiError } from "@/types";

export interface ReducerState {
    action: string,
    error: ApiError,
}