export const ButtonIndex = ({index, handleIndex}) => {
  return (
    <button
      id={index * 12}
      onClick={handleIndex}>
      {index + 1}
    </button>
  );
}
