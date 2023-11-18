import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8 rem 1.2rem;
  border: 1px solid red
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

/**
 * @param {Array} options - The array of options for the select input.
 * @param {string} value - The selected value for the select input.
 * @param {Function} onChange - The function to be called when the select input value changes.
 * @param {Object} props - Additional props to be passed to the select input.
 */

export default function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}
