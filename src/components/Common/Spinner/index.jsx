import "./style.css";

export default function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="three-body">
        <div className="three-body__dot" />
        <div className="three-body__dot" />
        <div className="three-body__dot" />
      </div>
    </div>
  );
}
