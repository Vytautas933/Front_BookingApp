import UserPreview from "./UserPreview";

export default UserPreview;


export function getusersList(){
    let usersdata 
     fetch('https://irenteye.com:8443/api/seller/get/sellers')
    .then(res => res.json()).then(data => usersdata= data);

    return usersdata
}

export function getPhotosList(id) {
    console.log(id)
  return fetch(`https://irenteye.com:8443/api/image/preview/${id}`)
  .then(res => res.text());
}


export function booking(){


    if(localStorage.getItem('user') != null){

    }else{
        alert("Need to log in first!")
    }

}