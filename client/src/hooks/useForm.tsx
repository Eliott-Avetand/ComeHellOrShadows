import { ChangeEvent, useState } from "react"

interface useFormProps {
    email: string,
    password: string
}

const useForm = (initialValues: useFormProps) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    return {
        values,
        handleChange
    }
}

export default useForm