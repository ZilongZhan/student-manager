export const Input = ({ label, id, type, value, action }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={action}
      />
    </>
  );
};
