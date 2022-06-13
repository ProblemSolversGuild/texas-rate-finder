import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LearnMore = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

    return (
      <>
        <Button variant='secondary' size='lg' onClick={handleShow}><b>Learn More</b></Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {/* <Modal.Title>Learn More</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h5>Who are we?</h5>
            <p>
              We are <a href='https://problemsolversguild.com' target='_blank'>The Problem Solvers Guild</a>.  We identify problems that impact us and work to develop solutions through an iterative process of trial and error.
            </p>
            <h5>Who pays us?</h5>
            <p>
              Our current path to monetization is to offer our service directly to consumers. This will be a free service for a limited beta period.
              <br/><br/>
              Once we get our payments set up, we will offer three tiers.  For $10, we will give you a 1-month license to help you find your next electric plan.  For $50, we will give you a 5-year license.  For REPs or other companies that want to use our powerful rate calculator engine, we offer a 3rd option.  For a quote on this option, reach out to kevin@theproblemsolversguild.com.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="success" onClick={() => navigate("/app")}>Get Started</Button>
          </Modal.Footer>
        </Modal>
        <button className='btn btn-success btn-lg px-4 gap-3' type='button'  onClick={() => navigate("/app")}><b>Get Started</b></button>
      </>
    );
  }
  
  export default LearnMore

  // <button className='btn btn-secondary btn-lg px-4 gap-3' type='button' data-toggle='modal' data-target='#learnMore'><b>Learn More</b></button>
  //             <div className='modal fade' id='learnMore' tabIndex='-1' role='dialog' aria-labelledby='learnMoreTitle' aria-hidden='true'>
  //               <div className='modal-dialog modal-dialog-centered' role='document'>
  //                 <div className='modal-content'>
  //                   <div className='modal-header'>
  //                     <h5 className='modal-title' id='learnMoreTitle'>Learn More</h5>
  //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
  //                       <span aria-hidden="true">&times;</span>
  //                     </button>
  //                   </div>
  //                   <div className='modal-body'>
  //                     Learning more now!
  //                   </div>
  //                   <div className='modal-footer'>
  //                   <button type='button' className='btn btn-failure' data-dismiss='modal' aria-label='Close'>Close</button>
  //                     <button type='button' className='btn btn-primary'>Get Started</button>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>