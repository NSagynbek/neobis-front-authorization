import axios from "axios"

const instance = axios.create({
    baseURL: "https://auth-neobis.up.railway.app/api/auth/",
 
}); 

export const login = async (data)=>{
    const res = await instance.post("sign-in",data)
    return res.data
}

export const signup = async (data)=>{
    const res = await instance.post("sign-up",data)
    return res.data
}

export const ensureRegistration = async (data)=>{
    const res = await instance.post("ensure-registration",data)
    return res.data
}

export const sendMessage = async (data)=>{
    const urlParam = 'https://example.com/your-url';

    const res = await instance.put("send-message",data,{
        params:{
            link:urlParam
        }
    })
    return res.data
}