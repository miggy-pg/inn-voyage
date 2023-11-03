import { FaExclamationCircle, FaWindowClose } from "react-icons/fa";
import Button from "./Button";
import StyledFormContainer from "./FormContainer/FormContainer";

export function ValidateDelete(props) {
  return (
    <StyledFormContainer $expandDelete={props.expandDelete}>
      <h5 className="md:text-md inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 lg:text-2xl">
        Delete item
      </h5>
      <Button
        $size="medium"
        $variations="closeTab"
        onClick={() => props.setExpandDelete((curr) => !curr)}
      >
        <FaWindowClose className="h-8 w-8 fill-current text-slate-400 transition duration-300 ease-in-out hover:text-slate-500 " />
      </Button>

      <FaExclamationCircle className="mb-4 mt-8 h-8 w-8 fill-current text-red-600" />
      <h3 className="md:text-md sm:text-md mb-6 text-lg text-gray-500 dark:text-gray-400 lg:text-2xl">
        Are you sure you want to delete this product?
      </h3>
      <Button $size="medium" $variations="danger">
        Yes, I&apos;m sure
      </Button>
      <Button
        $size="medium"
        $variations="secondary"
        className="ml-3"
        onClick={() => props.setExpandDelete((curr) => !curr)}
      >
        No, cancel
      </Button>
    </StyledFormContainer>
  );
}
