import { useEffect } from "react";


const useSetTitle = (title) => {
    useEffect( () => {
        document.title = `Speedy Wheels | ${title}`
    },[title])
}

export default useSetTitle;