import './Button.css';

const Button = ({ text, type = 'primary', onClick, fullWidth }) => {
  return (
    <button 
      className={`btn btn-${type} ${fullWidth ? 'btn-full' : ''}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;