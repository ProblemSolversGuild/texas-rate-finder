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
          </Modal.Header>
          <Modal.Body>
            <h5>Who are we?</h5>
            <p>
              We are <a href='https://problemsolversguild.com' target='_blank'>The Problem Solvers Guild</a>.  We identify problems that impact us and work to develop solutions through an iterative process of trial and error.  If you have an application that you would like The Problem Solvers Guild to work on, we would love to hear from you!
            </p>
            <h5>Who pays us?</h5>
            <p>
              Our tool is 100% donation supported. If the rate finder helped you find a new electric plan and you want it to continue to be free and available to all Texas customers, <a href='https://donate.stripe.com/eVa16r91H0E21HOdQS' target="_blank">donate to us</a>.<br/><br/>
              If any REPs want to use the powerful engine we've built on their site to help customers find a plan that fits their usage, reach out to kevin@theproblemsolversguild.com.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="success" onClick={() => navigate("/app")}>View the Rate Finder</Button>
          </Modal.Footer>
        </Modal>
        <button className='btn btn-success btn-lg px-4 gap-3' type='button'  onClick={() => navigate("/app")}><b>View the Rate Finder</b></button>
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