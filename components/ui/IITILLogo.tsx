import Image from "next/image";

interface IITILLogoProps {
  size?: number;
  className?: string;
}

export default function IITILLogo({
  size = 32,
  className = "",
}: IITILLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/iitil_logo.svg"
        alt="IITIL Logo"
        width={size}
        height={size}
        priority 
      />
      
    </div>
  );
}