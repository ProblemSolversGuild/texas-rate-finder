// let planList = [
//     {
//       plan_name: "Simple Saver 18",
//       plan_$_per_kwh:0.10,
//       effective_date:"01/18/2022",
//       contract_term:18,
//       termination_fee:"150.00",
//       renewable_content:6,
//       tdu_company:"CENTERPOINT ENERGY HOUSTON ELECTRIC LLC",
//       rep_company:"Peso Power",
//       facts_url:"kbird-desktop:7576/data/plans/2022-01-18/Peso Power/CENTERPOINT ENERGY HOUSTON ELECTRIC LLC/Simple Saver 18.pdf"
//     },
//     {
//       plan_name: "PTC Green Infusion Flex",
//       plan_$_per_kwh:0.15,
//       effective_date:"01/18/2022",
//       contract_term:1,
//       termination_fee:"150.00",
//       renewable_content:100,
//       tdu_company:"CENTERPOINT ENERGY HOUSTON ELECTRIC LLC",
//       rep_company:"INFUSE ENERGY LLC",
//       facts_url:"kbird-desktop:7576/data/plans/2022-01-18/INFUSE ENERGY LLC/CENTERPOINT ENERGY HOUSTON ELECTRIC LLC/PTC Green Infusion Flex.pdf"
//     },
//     {
//       plan_name: "Keep It Simple Savings Flex",
//       plan_$_per_kwh:0.18,
//       effective_date:"01/18/2022",
//       contract_term:18,
//       termination_fee:"150.00",
//       renewable_content:6,
//       tdu_company:"CENTERPOINT ENERGY HOUSTON ELECTRIC LLC",
//       rep_company:"INFUSE ENERGY LLC",
//       facts_url:"kbird-desktop:7576/data/plans/2022-01-18/INFUSE ENERGY LLC/CENTERPOINT ENERGY HOUSTON ELECTRIC LLC/Keep It Simple Savings Flex.pdf"
//     },
//     {
//       plan_name: "Texpo Saver No Long Term Commitment AutoPay E-Plan",
//       plan_$_per_kwh:0.20,
//       effective_date:"01/18/2022",
//       contract_term:18,
//       termination_fee:"150.00",
//       renewable_content:21,
//       tdu_company:"CENTERPOINT ENERGY HOUSTON ELECTRIC LLC",
//       rep_company:"TEXPO ENERGY",
//       facts_url:"kbird-desktop:7576/data/plans/2022-01-18/TEXPO ENERGY/CENTERPOINT ENERGY HOUSTON ELECTRIC LLC/Texpo Saver No Long Term Commitment AutoPay E-Plan.pdf"
//     },
//     {
//       plan_name: "Texpo Saver No Long Term Commitment AutoPay E-Plan",
//       plan_$_per_kwh:0.20,
//       effective_date:"01/18/2022",
//       contract_term:18,
//       termination_fee:"150.00",
//       renewable_content:21,
//       tdu_company:"CENTERPOINT ENERGY HOUSTON ELECTRIC LLC",
//       rep_company:"TEXPO ENERGY",
//       facts_url:"kbird-desktop:7576/data/plans/2022-01-18/TEXPO ENERGY/CENTERPOINT ENERGY HOUSTON ELECTRIC LLC/Texpo Saver No Long Term Commitment AutoPay E-Plan.pdf"
//     },
// ];

 export async function getRatePlanList(esiid, setRatePlanList) {
  const uri = process.env.REACT_APP_URI;
  let plan = null
  const response = await fetch(uri+"/plans/user/"+esiid) //?language=English&processed=True")
  plan = await response.json()
  // console.log(plan)
  // console.log(setRatePlanList)
  // setRatePlanList([])
  setRatePlanList(plan)
}