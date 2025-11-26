import Image from "next/image";
import photoCV from "@/public/michaelPhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function MainCard() {
  return (
    <div className="bg-white rounded-xl px-4 py-8 flex flex-col items-center w-90">
      <div className="relative w-70 h-100 overflow-hidden rounded-xl">
        <Image
          src={photoCV}
          alt="Michael's Photo"
          fill
          className="object-cover object-[50.5%_40%]"
        />
      </div>
      <h2 className="text-gray-800 text-3xl mt-2 tracking-tight font-medium user-name-font">
        Michael Rodríguez
      </h2>
      <span className="text-md text-gray-700 mt-1 text-center">
        Full-Stack Developer
      </span>

      <div className="flex flex-col items-center justify-center w-full mt-10">
        <span className="text-gray-700 gap-1 flex items-center">
          <FontAwesomeIcon icon={faLocationPin} />
          Málaga, España
        </span>
        <span className="text-gray-700 gap-1 flex items-center">
          <FontAwesomeIcon
            icon={faCircle}
            size="2xs"
            style={{ color: "#00c203" }}
            className="pulse-latency"
          />
          En búsqueda activa de empleo
        </span>
      </div>
    </div>
  );
}
