let fakePlanList = [
    {
      id_key: 1, 
      version: 0, 
      product: "Sample Plan #1",
      plan_$_per_kwh:0.10,
      contract_term:18,
      termination_fee:"150.00",
      renewable_content:6,
      tdu_company:"CENTERPOINT ENERGY HOUSTON ELECTRIC LLC",
      rep_company:"Company 1",
      facts_url:null
    },
    {
      id_key: 2, 
      version: 0, 
      product: "Sample Plan #2",
      plan_$_per_kwh:0.15,
      contract_term:1,
      termination_fee:"150.00",
      renewable_content:100,
      tdu_company:"CENTERPOINT ENERGY HOUSTON ELECTRIC LLC",
      rep_company:"Company 2",
      facts_url:null
    },
    {
      id_key: 3, 
      version: 0, 
      product: "Sample Plan #3",
      plan_$_per_kwh:0.18,
      contract_term:18,
      termination_fee:"150.00",
      renewable_content:6,
      tdu_company:"CENTERPOINT ENERGY HOUSTON ELECTRIC LLC",
      rep_company:"Company 3",
      facts_url:null
    },
    {
      id_key: 4, 
      version: 0, 
      product: "Sample Plan #4",
      plan_$_per_kwh:0.20,
      contract_term:18,
      termination_fee:"150.00",
      renewable_content:21,
      tdu_company:"CENTERPOINT ENERGY HOUSTON ELECTRIC LLC",
      rep_company:"Company 1",
      facts_url:null
    },
    {
      id_key: 5, 
      version: 0, 
      product: "Sample Plan #5",
      plan_$_per_kwh:0.20,
      contract_term:18,
      termination_fee:"150.00",
      renewable_content:21,
      tdu_company:"CENTERPOINT ENERGY HOUSTON ELECTRIC LLC",
      rep_company:"Company 3",
      facts_url:null
    },
];

 export async function getRatePlanList(esiid, minContractLength, maxContractLength, minRenewableContent, maxRenewableContent, setRatePlanList, setRatePlanListLoading) {
  const uri = process.env.REACT_APP_URI;
  setRatePlanList(null)
  setRatePlanListLoading(true)
  let plan = null
  const response = await fetch(uri+"/plans/user/"+esiid+"?min_term_value="+minContractLength+"&max_term_value="+maxContractLength+"&min_renewable="+minRenewableContent+"&max_renewable="+maxRenewableContent)
  plan = await response.json()
  if (response.status === 403) {
    plan=fakePlanList
  }
  // console.log(plan)
  setRatePlanList(plan)
  setRatePlanListLoading(false)
}

export async function getFakeRatePlanList(esiid, minContractLength, maxContractLength, minRenewableContent, maxRenewableContent, setRatePlanList, setRatePlanListLoading) {
  setRatePlanListLoading(true)
  setRatePlanList(fakePlanList)
  setRatePlanListLoading(false)
}