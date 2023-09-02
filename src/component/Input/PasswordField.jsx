/* eslint-disable react/prop-types */
const PasswordField = ({label, id, value, name, onChange, onBlur, disabled, error, errorMessage}) => {
    return (
      <>
        <label>{label}</label>
        <input id={id} name={name} type="password" value={value} onChange={onChange} onBlur={onBlur} disabled={disabled} />
        {error && <p>{errorMessage}</p>}
      </>
    )
  }
  
  export default PasswordField