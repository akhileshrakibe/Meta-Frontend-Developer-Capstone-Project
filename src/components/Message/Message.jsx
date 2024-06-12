import "./Message.css";
import { X } from "lucide-react";

function Message({ msgClose }) {
  return (
    <>
      <div className="message">
        <h3>Order placed successfully</h3>
        <button 
        onClick={() => msgClose(false)} 
        className="btnx">
          <X />
        </button>
      </div>
    </>
  );
}

export default Message;
