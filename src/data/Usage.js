// let usageData = [
//     {x: new Date('2022-01-01T01:00:00'), y: 2},
//     {x: new Date('2022-01-01T02:00:00'), y: 3},
//     {x: new Date('2022-01-01T03:00:00'), y: 4}
// ];

export async function getUsage({ esiid, setUsage } ) {
    const uri = process.env.REACT_APP_URI;
    let usageData = null
    console.log("getting data for " + esiid)
    const response = await fetch(uri+"/usages/"+esiid)
    usageData = await response.json()
    setUsage(usageData)
}