
import UserPreview from "./UserPreview";

export default UserPreview;


export function getusersList(){
    return fetch('https://irenteye.com:8443/api/seller/get/sellers')
    .then(res => res.json())  
    };
   


export function getPhotosList(id) {
    // console.log(id)
  return fetch(`https://irenteye.com:8443/api/image/preview/${id}`)
  .then(res => res.blob()) 
}


export function booking(){


    if(localStorage.getItem('user') != null){

    }else{
        alert("Need to log in first!")
    }

}