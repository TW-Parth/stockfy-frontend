/* eslint-disable react/prop-types */
const TextField = ({ label, id, value, name, onChange, onBlur, disabled, errorMessage, error }) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <input id={id} name={name} type="text" className="form-control" value={value} onChange={onChange} onBlur={onBlur} disabled={disabled} />
      {error && <p className="text-danger">{errorMessage}</p>}
    </>
  );
};

export default TextField;
