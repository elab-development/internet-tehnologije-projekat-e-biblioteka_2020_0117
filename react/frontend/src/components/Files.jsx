import React from 'react'
import OneFile from './OneFile'






const Files = ({files}) => {



    return (
        <div>
           {files.map((file) =>(<OneFile file = {file}/>))}
           
            
        </div>
    )
}

export default Files
