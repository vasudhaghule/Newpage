'use client';
import Image from "next/image";

interface IconPointsProps {
  text: string;
  imageSrc: string; 
}

const IconPoints: React.FC<IconPointsProps> = ({
  imageSrc,text,
}) => {
  return (
    <div
      className="flex items-center"
      style={{
        marginTop: "15px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        
      }}
      
    >
        <Image
        src={imageSrc}
        alt="Icon"
        width={27.32}
        height={27}
        style={{
          marginLeft: "2px 8px 4px 6px",
          
        }}
      />

      <span
        style={{
          width: "auto", 
          height: "28px",
          fontFamily: "Manrope",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "28px",
          color: "#000000",
          marginLeft:"25px"
          
        }}
      >
        {text}
      </span>
      
    </div>
  );
};

export default IconPoints;
