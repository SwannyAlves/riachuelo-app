/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from "react";
import MessageContext from "../contexts/MessageContext";
import "./Message.css";

function Message() {
  const { message, setMessage } = useContext(MessageContext);

  return (
    message && (
      <div className="alert">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span className="closebtn" onClick={() => setMessage("")}>
          &times;
        </span>
        {message}
      </div>
    )
  );
}

export default Message;
