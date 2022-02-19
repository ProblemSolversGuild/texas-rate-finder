// let userInfo = {
//       email: "kevin@theproblemsolversguild.com",
//       esiid: 1008901023808934750100,
//       meter_number:"01/18/2022",
//       current_electric_provider:18,
//       additional_comments:"150.00"
//     }

export async function getUserInfo({userEmail, setUserInfo}) {
    const uri = process.env.REACT_APP_URI;
    console.log(uri+"/users/"+userEmail)
    const response = await fetch(uri+"/users/"+userEmail)
    response.status === 404? setUserInfo(null): setUserInfo( response.json() )
  }