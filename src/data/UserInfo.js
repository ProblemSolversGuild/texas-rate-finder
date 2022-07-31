// let userInfo = {
//       email: "kevin@theproblemsolversguild.com",
//       esiid: 1008901023808934750100,
//       meter_number:"01/18/2022",
//       current_electric_provider:18,
//       additional_comments:"150.00"
//     }
import LogRocket from 'logrocket';

export async function getUserInfo({userEmail, setUserInfo}) {
    const uri = process.env.REACT_APP_URI;
    let userData = null
    // console.log(uri+"/users/"+userEmail)
    const response = await fetch(uri+"/users/"+userEmail)
    userData = await response.json()
    if (uri!='https://kbird-desktop:7576') {
      LogRocket.identify(userEmail, {
        name: userData.name,
        email: userData.email
      });
    }
    response.status === 404? setUserInfo(null): setUserInfo(userData)
  }