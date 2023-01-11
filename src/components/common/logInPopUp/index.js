
export async function login(unameOrEmail, password){


  const data = {unameOrEmail, password}
   const response = await fetch('http://185.34.52.28:8090/api/user/login', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
  })


  const json = await response.json();
  console.log(json)
  console.log(response)

  if (response.status === 200 || response.status === 201) {
    localStorage.setItem('user', unameOrEmail);
    alert("Very nice!!!")
    return true;
  } else {
    alert(response.message)
    throw new Error(response.message);
  }

    
}



