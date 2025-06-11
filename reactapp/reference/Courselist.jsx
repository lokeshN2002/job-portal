import Course from '../reference/Course'
import { useState, useEffect } from 'react'

function Courselist() {

    const [listyofobjects, SetListofobjects] = useState(null)

    useEffect(() => {
        fetch('')
            .then(response => {
                return response.json();
            }).then(data => SetListofobjects(data))
    }, [])

    function handleDelete(id) {
        const newlist = listyofobjects.filter((input) => input.id != id)
        SetListofobjects(newlist)
    }

    if (!listyofobjects) {
        return <></>
    }
    const mapvalue = listyofobjects.map((input) =>
        <Course key={input.id} name={input.name} price={input.price}
            image={input.image} delete={handleDelete} id={input.id} />
    )
    return (
        <>
            {mapvalue}
        </>
    )
}

export default Courselist