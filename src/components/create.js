import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import camera from "../images/camera.png"
import icon from "../images/icon.png"
import "./css/create.css"
const Create = () => {
    const navigate = useNavigate();
    const url = "https://instaclone-node-app.herokuapp.com/create"

    // const [image, setImage ] = useState("");
    const [imgurl, setImgurl] = useState("");
    const uploadImage = (image) => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "instaclone")
        data.append("cloud_name", "de3gvvczn")
        fetch("https://api.cloudinary.com/v1_1/de3gvvczn/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setImgurl(data.url)
            })
            .catch(err => console.log(err))
    }
    const [data, setData] = useState({
        name: "",
        location: "",
        description: "",
        image: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            description: data.description,
            location: data.location,
            image: imgurl
        }).then(res => {
            console.log(res.data)
        })
        navigate("/posts")

    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }
    return (
        <div>
        <header>
          <div className="heading">
            <img src={icon} alt="icon" className="icon" />
            <div className="appname">instaclone</div>
          </div>

          <div>
            <img src={camera} alt="cam" onClick={() => navigate("/create")} className="camera" />
          </div>
          <hr />
          </header>
        <div className='create-container'>
            <form onSubmit={(e) => submit(e)}>
                <div>
                    <input type="text"  placeholder='Filepath' />
                    <input type="file" onChange={(e) => uploadImage(e.target.files[0])} className="image-input"/>



                </div>
                <div>
                    <input type="text" onChange={(e) => handle(e)} id="name" value={data.name} placeholder="Author"/>
                    <input type="text" onChange={(e) => handle(e)} id="location" value={data.location} className="image-input" placeholder='Location' />
                </div>
                <div>
                    <input type="text" onChange={(e) => handle(e)} id="description" value={data.description} className="desc" placeholder='Description' />
                </div>
                <button >Post</button>
            </form>

        </div>
        </div>
    )
}
export default Create

