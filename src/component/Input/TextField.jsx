/* eslint-disable react/prop-types */
const TextField = ({label, id, value, name, onChange, onBlur, disabled, errorMessage, error}) => {
  return (
    <>
      <label>{label}</label>
      <input id={id} name={name} type="text" value={value} onChange={onChange} onBlur={onBlur} disabled={disabled} />
      {error && <p>{errorMessage}</p>}
    </>
  )
}

export default TextField;