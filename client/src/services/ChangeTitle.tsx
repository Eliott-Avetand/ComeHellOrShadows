import { useEffect } from "react";

const ChangeTitle = (title: string) => {
    useEffect(() => {
        document.title = title
    }, [title])
}

export default ChangeTitle;