import './Landing.css';
import LearnMore from './components/LearnMore'

function Landing() {
  return (
    <div className="Landing container-fluid">
      <main>
        <div className='px-4 py-5 my-5 text-center'>
          <h1 className='display-5 text-center'>Welcome to the Texas Rate Finder!</h1>
          <div className='col-lg-6 mx-auto'>
            <p className='lead mb-4'>
              Our mission is to help Texas Residential customers select the best electric plan for them.
              We believe that any customer should be able to select the best plan without spending hours reading how each individual plan is different from the hundreds of other plans.  
            </p>
            <p className='lead mb-4'>
              We appreciate you giving us an opportunity to help you find the best rate.
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
