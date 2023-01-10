export  async function singup(username, email, password, repeatPassword, gender){
    const data = {username, email, password, repeatPassword, gender}


    if(password === repeatPassword){
    await fetch('http://185.34.52.28:8090/api/user/register/user', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    }else{
        console.log("nesutampa slaptazodziai")
    }
}