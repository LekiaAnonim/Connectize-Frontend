import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Notification } from '../../../icon';

function FeedModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      //centered
    >
      <Modal.Header onClick={props.onHide} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Notifications 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex'>
            <div className='w-25'>
                <img src='images/notificationimg.PNG' className='w-75 rounded-pill' alt='#'/>
            </div>
            <div>
                <h6>The Walt Disney Company</h6>
                <p>Tagged you in post <br/>12 mins ago</p>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function FeedsModal() {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div>
      <div variant="primary"  onClick={() => setModalShow(true)}>
        <Notification/>
      </div>

      <FeedModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}