import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import StyledFormContainer from "../FormContainer";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, setOpenName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const header =
    name === "delete-form"
      ? "Delete cabin"
      : `${name === "cabin-form" ? "Add new cabin " : "Edit cabin"}`;

  if (name !== openName) return null;

  /** createPortal (JSX, DOM) params:
   * @param JSX component we want to display
   * @param DOM node where we want to render the JSX  */

  return createPortal(
    <StyledFormContainer $expandCreate={openName}>
      <h5 className="md:text-md mb-4 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 lg:text-2xl">
        {header}
      </h5>

      {cloneElement(children, { closeModal: close })}
    </StyledFormContainer>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
