const Button = ({ children, className }) => (
  <button
    className={` focus:shadow-none border-black shadow-offset-black   hover:underline border-2  text-gray-900 font-semibold ${className}`}
  >
    {children}
  </button>
);

export default Button;
