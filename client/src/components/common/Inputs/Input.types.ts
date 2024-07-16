import { ChangeEvent, ReactNode } from "react"

export interface inputFieldProps {
    label: string,
    name: string, 
    type: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    icon: ReactNode
}