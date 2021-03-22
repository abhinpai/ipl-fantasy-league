import React from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { SuccerssIcon, ErrorIcon, WarningIcon } from '../../assets/icons/index';

export const successToast = (content) =>
  toast.success(toastBody(content, SuccerssIcon));

export const warningToast = (content) =>
  toast.warning(toastBody(content, WarningIcon));

export const errorToast = (content) =>
  toast.error(toastBody(content, ErrorIcon));

const toastBody = ({ title, message }, img) => (
  <div className='notification'>
    <img src={img} alt='Notification Icon' />
    <div>
      <h3>{title}</h3>
      {message && <p>{message}</p>}
    </div>
  </div>
);

const Notification = () => {
  return (
    <ToastContainer
      autoClose={3000}
      hideProgressBar={true}
      transition={Slide}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
      position={toast.POSITION.BOTTOM_RIGHT}
    />
  );
};

export default Notification;
