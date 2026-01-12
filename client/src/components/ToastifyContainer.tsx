import { createPortal } from "react-dom";
import { Bounce, ToastContainer } from "react-toastify";

export default function ToastifyContainer() {
  return createPortal(
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      closeOnClick
      pauseOnHover
      theme="light"
      transition={Bounce}
      closeButton={false}
    />,
    document.getElementById("toastify-container")!,
  );
}
