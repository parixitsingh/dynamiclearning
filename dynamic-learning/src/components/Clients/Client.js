import { useLocation } from 'react-router-dom';

export default function Client(url, method, body, callBack, errorCallBack) {
    const location = useLocation();
    if (!callBack){
        callBack = ()=>{
           alert("hello")
        }
    } 

    if (!errorCallBack){
        errorCallBack = (err)=>{
            console.log(err)
        }
    } 
   
}