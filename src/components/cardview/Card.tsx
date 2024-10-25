import Image from "next/image";


type CardProps = {
    title: string;
    tagline: string;
    description: string;
    imageSrc: string;
  }
  
const Card: React.FC<CardProps> = ({ title, tagline, description, imageSrc }) => {
    return (
      <div className="w-80 rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: "#E2E8F0" }}>
        <div className="relative h-48">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-5">
          <h3 className="mt-1 scroll-m-10 text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm italic mb-4" style={{ color: "#64748B" }}>{tagline}</p>
          <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>{description}</p>
        </div>
      </div>
    );
  };

export default Card