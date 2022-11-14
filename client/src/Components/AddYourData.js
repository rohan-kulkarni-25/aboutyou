import "./Styles/AddYourData.css";
import React, { useState } from "react";
import axios from 'axios';

export default function AddYourData(props) {

  const { setPage, setload, load } = props;
  const [photo, setPhoto] = useState(null)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [headline, setHeadline] = useState(null)
  const [bio, setBio] = useState(null)
  const [github, setGithub] = useState(null)
  const [linkedin, setLinkedin] = useState(null)
  const [twitter, setTwitter] = useState(null)
  const [instagram, setInstagram] = useState(null)


  const wordLimitCheck = (event) => {
    const wordLength = event.target.value.length
    if (wordLength > 200) {
      alert('Please keep your Bio short....')
    }
    setBio(event.target.value)
  }
  const handleSubmit = (event) => {
    setload(true)
    const formData = new FormData();
    formData.append('photo', photo)
    formData.append('name', name)
    formData.append('email', email)
    console.log(email);
    formData.append('headline', headline)
    formData.append('bio', bio)
    formData.append('github', github)
    formData.append('linkedin', linkedin)
    formData.append('instagram', instagram)
    formData.append('twitter', twitter)

    const config = {
      onUploadProgress: progressEvent => { console.log((progressEvent.loaded / progressEvent.total) * 100) }
    }
    axios
      .post("http://localhost:4002/api/v1/addaboutyou", formData, config)
      .then((res) => {
        const page = res.data.page;
        setload(true);
        setPage(page);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleFileSelect = (event) => {
    setPhoto(event.target.files[0])
  }

  return (
    <div className={load ? 'formwindow blur' : 'formwindow'}>
      <div className="form-box">
        <div className="left">
          <div className="basic-box">
            <label>
              Name: <input type="text" name="name" required placeholder="Rohan Kulkarni" onChange={(e) => { setName(e.target.value); }} />
            </label>
            <label>
              Email: <input type="text" name="email" required placeholder="rohank2502@gmail.com" onChange={(e) => { setEmail(e.target.value); }} />
            </label>
            <label>
              Headline: <input type="text" name="headline" required placeholder="Web Developer" onChange={(e) => { setHeadline(e.target.value); }} />
            </label>
            <label>
              Profile Pic: <input type='file' name="photo" onChange={handleFileSelect} />
            </label>


          </div>
        </div>
        <div className="right">
          <div className="bio-box">
            <label>
              Bio: <textarea name="bio" placeholder="Something about you" onChange={wordLimitCheck} />
            </label>
          </div>
          <div className="link-box">
            <label>
              GitHub: <input type="text" name="github" placeholder="https://github.com/rohan-kulkarni-25" onChange={(e) => { setGithub(e.target.value); }} />
            </label>
            <label>
              Twitter: <input type="text" name="twitter" placeholder="https://twitter.com/rohan_2502" onChange={(e) => { setTwitter(e.target.value); }} />
            </label>
            <label>
              LinkedIn: <input type="text" name="linkedin" placeholder="https://www.linkedin.com/in/rohan-k-2502/" onChange={(e) => { setLinkedin(e.target.value); }} />
            </label>
            <label>
              Instagram: <input type="text" name="instagram" placeholder="https://www.instagram.com/rohan_k_2502/" onChange={(e) => { setInstagram(e.target.value); }} />
            </label>
            <button className="submit" type="submit" onClick={handleSubmit}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div >
  );
}