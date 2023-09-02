/* eslint-disable react/prop-types */
const PasswordField = ({ label, id, value, name, onChange, onBlur, disabled, error, errorMessage }) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <input id={id} name={name} className="form-control" type="password" value={value} onChange={onChange} onBlur={onBlur} disabled={disabled} />
      {error && <p className="text-danger">{errorMessage}</p>}
    </>
  );
};

export default PasswordField;
