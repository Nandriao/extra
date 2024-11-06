import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface OperationCardProps {
  href: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
}

const OperationCard = ({ href, imageSrc, imageAlt, title }: OperationCardProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center shadow-md active:opacity-50 transition-all bg-gray-200 rounded-md p-2"
      tabIndex={0}
      role="button"
      aria-label={`${title} operation`}
    >
      <Image src={imageSrc} alt={imageAlt} className="w-[100px]" />
      <p className="text-gray-500 pb-1">{title}</p>
    </Link>
  );
};

export default OperationCard; 