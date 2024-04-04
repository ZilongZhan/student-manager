export const Button = ({ label, type, action }) => {
  return (
    <button type={type} onClick={action}>
      {label}
    </button>
  );
};
