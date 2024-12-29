import React, { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/utkarshupdy')
    //     .then(response =>response.json())
    //     .then(data => {
    //         setData(data)

    //     })
      
    // }, [])
    
  return (
    <div className='text-center bg-gray-600 text-white p-4 text-3xl m-4'>Github followers : {data.followers}
    <img src={data.avatar_url} alt="Git Picture"  width={300}/>
    
    </div>
  )
}

export default Github
export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/utkarshupdy')
    return response.json()

    


}