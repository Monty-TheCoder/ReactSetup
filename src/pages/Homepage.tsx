import { useEffect } from "react"

const Homepage = () => {
    const getData = async () => {
        console.log("try");

    }
    useEffect(() => {
        getData();

    }, [])
    return (
        <>
            <h1>hi</h1>
        </>
    )
}

export default Homepage