// Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string; 
  textColor?: string; 
}

export const Button: React.FC<ButtonProps> = ({
  bgColor = "#FFFFFF", 
  textColor = "#000000", 
  children, 
  ...props 
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className=" py-3 px-5  border-2 border-black rounded-full font-medium text-sm transition-all hover:opacity-95"
      {...props} 
    >
      <span>{children}</span>
    </button>
  );
};
