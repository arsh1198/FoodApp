import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`;

const Overlay = styled.div`
  width: 500px;
  position: fixed;
  inset: 50% 0 0 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  border-radius: 15px;
  padding: 1.5em;
  z-index: 5;
`;

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <Overlay>{children}</Overlay>
    </>,
    document.getElementById("overlay")
  );
};

export default Modal;
