// Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string; // Background color
  textColor?: string; // Text color
}

export const Button: React.FC<ButtonProps> = ({
  bgColor = "#FFFFFF", // Default background color
  textColor = "#000000", // Default text color
  children, // Button text/content
  ...props // Other button props
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className=" py-3 px-5  border-2 border-black rounded-full font-medium text-sm transition-all hover:opacity-95"
      {...props} // Spread additional button attributes
    >
      <span>{children}</span>
    </button>
  );
};
