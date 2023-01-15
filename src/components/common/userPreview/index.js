import UserPreview from "./UserPreview";

export default UserPreview;


export function usersList(){
    return fetch('https://irenteye.com:8443/api/sellers/get/sellers')
    .then(res => res.json());
}


export function booking(){


    if(localStorage.getItem('user') != null){

    }else{
        alert("Need to log in first!")
    }

}