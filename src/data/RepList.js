export async function getRepList({setRepList}) {
    const uri = process.env.REACT_APP_URI;
    let tmp = null
    const response = await fetch(uri+"/reps")
    tmp = await response.json()
    response.status === 404? setRepList(null): setRepList(tmp)
  }