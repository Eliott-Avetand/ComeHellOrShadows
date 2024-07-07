import { ChangeEvent } from "react";

export interface InputProps {
    fieldValue: string,
    onChangeFunction: (e: ChangeEvent<HTMLInputElement>) => void
}