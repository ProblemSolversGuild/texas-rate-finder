import { Toast, ToastContainer } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckEmail = ({}) => {
    const navigate = useNavigate()
    const [showToast, setShowToast] = useState(true);
    return (
        <ToastContainer position='middle-center'>
            <Toast show={showToast} onClose={() => setShowToast(!showToast)} bg='light'>
                <Toast.Header>
                <strong className="me-auto">Check your email</strong>
                <small></small>
                </Toast.Header>
                <Toast.Body>An Email has been sent to the email associated with your account.  Because we get your usage from Smart Meter Texas, you have to authorize us to view your electric usage.  <br/>Once you confirm the agreement, return to this page and the plans will show up.  
                    If you don't see an email shortly after filling out your esid, meter number, and current REP, <a role='button' onClick={()=>navigate("/signup")} href="javascript:void(0);">double-check that all information you entered was accurate</a>. <br/>Otherwise, just send an email to <b>kevin@theproblemsolversguild.com</b> (attaching the most recent bill will speed up the support process)
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default CheckEmail
