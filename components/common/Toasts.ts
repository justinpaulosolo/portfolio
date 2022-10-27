import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const successToast = (msg: string) =>
toast.success(msg, {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

const errorToast = (msg: string) =>
toast.error(msg, {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

export {successToast, errorToast};