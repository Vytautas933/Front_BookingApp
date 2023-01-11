

export async function login(unameOrEmail, password){
    const data = {unameOrEmail, password}
    await fetch('http://185.34.52.28:8090/api/user/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .then(res => res.json())
    .then(localStorage.setItem('user', 'admin'))
    .then(data => console.log(data))
    .then(setTimeout(() =>{
      window.location.reload();
  },1000))
    
}



