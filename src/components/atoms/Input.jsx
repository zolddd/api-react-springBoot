function Input({ type, name, value, handleChange }) {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default Input;
