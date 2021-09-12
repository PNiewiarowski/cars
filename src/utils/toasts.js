import { toast } from "react-hot-toast";

const toastSuccess = function (message) {
  toast.success(message, {
    style: {
      padding: "12px",
      color: "#75df75",
      backgroundColor: "#343A3F",
      boxShadow: "none",
      borderRadius: 0,
    },
    position: "bottom-right",
    iconTheme: {
      primary: "#75df75",
      secondary: "#056f05",
    },
  });
}

export { toastSuccess };