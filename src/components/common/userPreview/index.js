import UserPreview from "./UserPreview";

export default UserPreview;


export function booking(){

    const btn = document.getElementById('book')

    if(localStorage.getItem('user') != null){

        btn.style.backgroundColor = 'black';
    }else{
        alert("Need to log in first!")
    }

}