import { FaWindowClose } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { CabinContext } from "../../../../contexts/cabinProvider";
import Button from "../../../Common/Button";
import StyledFormContainer from "../../../Common/FormContainer";
import { useContext } from "react";

import useCreateCabin from "./useCreateCabin";
import { CreateCabinForm } from "./CreateCabinForm";
import Modal from "../../../Common/Modal";

export default function CreateCabin() {
  return (
    <Modal.Window name="cabin-form">
      <CreateCabinForm />
    </Modal.Window>
  );
}
{
  /* <Button $size="medium" $variations="closeTab">
  <FaWindowClose className="h-8 w-8 fill-current text-slate-400 transition duration-300 ease-in-out hover:text-slate-500 " />
</Button>; */
}
