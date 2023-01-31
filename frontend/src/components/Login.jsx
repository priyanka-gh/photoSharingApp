import React from 'react'
import shareVideo from '../assets/video.mp4'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {client} from '../client'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle=(response)=>{
    localStorage.setItem('user', JSON.stringify(response))

    const{name, sub, picture} = response;
    
    const doc={
      _id:sub,
      _type:'user',
      userName:name,
      image:picture
    }

    client.createIfNotExists(doc)
    .then(()=>{
      navigate('/',{replace:true})
    })
  }
  
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className="relative w-full h-full">
        <video src={shareVideo} 
        type="video/mp4" 
        loop 
        controls={false} 
        muted 
        autoPlay 
        className='w-full h-full object-cover'/>
        <div className="absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            {/* <img src={logo} width="130px" alt="logo" /> */}
          </div>
          <div>
            <div className="signupDiv">
            <GoogleLogin
              onSuccess={credentialResponse => {
                var decoded=jwt_decode(credentialResponse.credential);
                responseGoogle(decoded)
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />;
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login