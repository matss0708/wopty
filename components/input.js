import { useState } from "react"

const Input = ({setcount}) => {
    const [post, setPost] = useState('')
    const postData=async()=>{
        if(post!==''){
           await fetch('/api/post', {
                method: "POST",
      
                body: JSON.stringify({
                    post: post,
                }),
      
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
            })
        }
        setPost('')
        setcount(Math.random()*300)
    }
    const onChange=(e)=>{
       setPost(e.target.value) 
    }

    return (
        <div className='absolute bottom-0 w-full flex justify-center mb-3'>
            <div className='w-2/5 flex justify-center bg-gray-200 p-2 rounded-md'>
                <input type="text" className='w-3/5 h-12' onChange={(e)=>onChange(e)} value={post} maxlength="200"/>
                <button className='px-8 py-2 bg-blue-400 ml-5 rounded-md'onClick={postData}>Send</button>
            </div>
        </div>
    )
}
export default Input
