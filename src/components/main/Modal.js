import React from 'react';

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main col-10 col-sm-5 col-xl-3 col-lg-4 rounded">
        {children}
        <div className="col text-center">
          <button className="btn btn-danger my-2" onClick={handleClose}>Close</button></div>
      </section>
    </div>
  );
};
export default Modal;