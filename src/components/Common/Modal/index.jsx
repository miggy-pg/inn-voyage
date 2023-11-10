import { FaWindowClose } from "react-icons/fa";
import Button from "../Button";
import StyledFormContainer from "../FormContainer";
import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useState } from "react";
import { set } from "date-fns";

// React Portal - best for taking out a component out of the parent component while leaving the
// position of the component in the DOM tree intact.

// OBJECTIVE: The goal here is to close the modal when clicked
//            outside of the modal. We can do this by taking the modal out of
//            the parent component and putting

// BEST FOR MODALS AND TOOLTIPS

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
  console.log("opensWindowName: ", opensWindowName);
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  console.log("name: ", name);
  const { openName, close } = useContext(ModalContext);
  console.log("openName: ", openName);
  if (name !== openName) return null;

  /** createPortal (JSX, DOM) params:
   * @param JSX component we want to display
   * @param DOM node where we want to render the JSX  */

  return createPortal(
    <StyledFormContainer $expandCreate={openName}>
      <h5 className="md:text-md mb-4 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 lg:text-2xl">
        New Cabin
      </h5>

      {children}
    </StyledFormContainer>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
