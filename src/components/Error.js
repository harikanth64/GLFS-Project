import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>And Internal error occured!</h2>
            <pre>Error: {error.message}</pre>
            {/* <pre>{error.status} {error.statusText}</pre> */}
        </div>
    )
}

export default Error
