import { toast, ToastPosition, Flip } from 'react-toastify';
import { capitalizeFirstLetter, toTitleCase } from 'utils/common';

const options = {
  position: 'bottom-center' as ToastPosition,
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  transition: Flip,
};

const toaster = {
  success: (msg: any) => {
    toast.success(`✓ ${toTitleCase(msg)}`, options);
  },
  error: (msg: any) => {
    toast.error(`✘ ${toTitleCase(msg)}`, options);
  },
  info: (msg: any) => {
    toast.info(`✉ ${toTitleCase(msg)}`, options);
  },
  validate: (msg: any) => {
    toast.error(`✘ ${msg}`, options);
  },
};

export default toaster;
