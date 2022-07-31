import './Landing.css';
import LearnMore from './components/LearnMore'

function Landing() {
  return (
    <div className="Landing container-fluid">
      <main>
        <div className='px-4 py-5 text-center'>
          <h1 className='display-5 text-center'>Welcome to the Texas Rate Finder!</h1>
          <div className='col-lg-6 mx-auto'>
            <p className='lead mb-4'>
              Our mission is to help Texas Residential customers find the best electric plan based on their historical usage.
              You should be able to select the best plan for your needs without spending hours reading how each individual plan is different 
              from the hundreds of other plans and putting together your own spreadsheet.  You also shouldn't have to pay a monthly charge for something you are going to look at once every one to three years
            </p>
            <p className='lead mb-4'>
              The Texas Rate Finder is an ad-free, donation driven tool that allows you to quickly see what electric plan is best for you based on your historical usage. 
              This tool analyzes all of the plans available on the <a href='powertochoose.org' target="_blank" >Power To Choose</a> website using the 15-minute usage data from <a href='smartmetertexas.com' target="_blank">Smart Meter Texas</a>.  
              Using 15-minute usage data means you can see the top resutls based on your usage whether that plan contains free nights & weekends, usage credits at 1000kWh, or tiered usage charges.  You will get a breakdown of all these plans and be able to decide which one works best for you
            </p>
            <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
              <LearnMore />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
