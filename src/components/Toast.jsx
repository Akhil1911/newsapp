import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export const showToast = (type, msg) => {
  switch (type) {
    case "SUCCESS":
      toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
          theme: "dark",
      });
          
          console.log("SUCCESS TOAST")

      break;

      case "ERROR":
          toast.error(msg, {
            position: "top-right",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
          
      break;

    default:
      return false;
  }
};
