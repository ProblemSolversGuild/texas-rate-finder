import OutputPlanItem from './OutputPlanItem';

const OutputPlanList = ( { planList }) => {
    const display_n_items = 5;

    return (
        <>
            {planList.slice(0,display_n_items).map(plan => (
                <OutputPlanItem plan={plan} />
            ))
            }
        </>
    );
}

export default OutputPlanList
