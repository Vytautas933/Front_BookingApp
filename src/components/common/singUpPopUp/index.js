export async function singup(username, email, password, repeatPassword, gender, seller) {
  const data = { username, email, password, repeatPassword, gender }




  if (password === repeatPassword) {

    if (seller) {
      
      const responses = await fetch('https://irenteye.com:8443/api/seller/register', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        }
      })


      const json = await responses.json();
      console.log(json)
      console.log(responses)

      if (responses.status === 200 || responses.status === 201) {
        alert("Great success!!!")
        return true;
      } else {
        alert(responses.message)
        throw new Error(responses.message);
      }
    } else {

      const response = await fetch('https://irenteye.com:8443/api/user/register', {
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
        alert("Great success!!!")
        return true;
      } else {
        alert("response.message")
        throw new Error(console.log(response.message));
      }
    }
  }

}


