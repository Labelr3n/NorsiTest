import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const AddClient = ({state, setState, setVisible}) => {
    const [post, setPost] = useState({name: '', sex: '', job: '', birthday: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        setVisible(false)
        setState([...state, {...post, id: Date.now().toString().substr(8,3)}])
        setPost({name: '', sex: '', job: '', birthday: ''})
    }

    
    return (
        <form className='form'>
            <MyInput 
            value={post.name}
            onChange={e => setPost({...post, name: e.target.value})}
            type="text"
             placeholder='Name'
            />
            <MyInput 
            value={post.sex}
            onChange={e => setPost({...post, sex: e.target.value})}
            type="text"
             placeholder='Sex'
            />
            <MyInput
            value={post.job}
            onChange={e => setPost({...post, job: e.target.value})}
            type="text"
             placeholder='Job'
            />
            <MyInput 
            value={post.birthday}
            onChange={e => setPost({...post, birthday: e.target.value})}
            type="date"
             placeholder='Birthday'
             style={{marginBottom: '20px'}}
            />
            <MyButton onClick={addNewPost} children={'Добавить сотрудника'}/>
        </form>
    )
}

export default AddClient