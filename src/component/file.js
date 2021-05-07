import {storage} from '../firebase/index';
import React,{useState} from 'react';

const Image = () => {
    const [image,setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChnage = e => {
        if(e.target.files[0])
        {
            setImage(e.target.files[0])
        }
    }
    const handleUpload = ()=>{
        setLoading(true);
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    setUrl(url)
                    setLoading(false)
                })
            }
        )
    }

  return (
    <div>
        <h3>File Upload</h3>
          <input type="file" onChange={handleChnage}/><br/><br/>
          {loading ? (<div>Loading ... </div>) : (
            <img src={url || "http://via.placeholder.com/200"} height="200px" width="200px" alt="Uploaded File"/>   
          )}
          <br/><br/>
          <button type="submit" onClick={handleUpload}>Submit</button>
    </div>
  );
}

export default Image;
