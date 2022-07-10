import { Toast, ToastContainer } from 'react-bootstrap';
import { useState } from 'react';

const CheckEmail = ({}) => {
    const [showToast, setShowToast] = useState(true);
    return (
        <ToastContainer position='middle-center'>
            <Toast show={showToast} onClose={() => setShowToast(!showToast)} bg='light'>
                <Toast.Header>
                {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
                <strong className="me-auto">Check your email</strong>
                <small></small>
                </Toast.Header>
                <Toast.Body>Because we get your usage from Smart Meter Texas, you have to authorize us to view your electric usage.  If you don't see anything shortly, send an email to <b>kevin@theproblemsolversguild.com</b></Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default CheckEmail
