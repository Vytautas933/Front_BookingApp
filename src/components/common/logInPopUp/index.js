
export async function login(unameOrEmail, password){


  const data = {unameOrEmail, password}
   const response = await fetch('https://irenteye.com:8443/api/user/login', {
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
    alert("Great success!!!")
    return true;
  } else {
    alert(response.message)
    throw new Error(response.message);
  }

    
}



