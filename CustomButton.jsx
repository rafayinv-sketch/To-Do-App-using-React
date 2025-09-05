const CustomButton = ({ disabled, onClick, className, iconClass }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {<i className={iconClass}></i>}
    </button>
  );
};

export default CustomButton;
