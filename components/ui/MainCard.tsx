import Image from "next/image";
import photoCV from "@/public/michaelPhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function MainCard() {
  return (
    <div>
      <div className="bg-white rounded-xl px-4 py-8 flex flex-col items-center">
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
        <span className="text-[#00c203c0] gap-1 flex items-center mt-4">
          <FontAwesomeIcon
            icon={faCircleCheck}
            size="sm"
            style={{ color: "#00c203c0" }}
            className=""
          />
          Open to Work
        </span>
      </div>
      </div>
      <div className="mt-10 w-full flex items-center justify-center">
<a
              target="_blank"
              rel="noopener noreferrer"
              href="/Michael_Rodriguez_Junior_FullStack_CV.pdf"
              className="flex items-center hover:scale-105 transition duration-200 ease-in-out"
            >
              <div className="flex items-center  bg-white text-black p-3 rounded-2xl">
                <span>Descargar CV</span>
                <div className="ms-2 bg-[#F29057] rounded-sm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 24 L24 8"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 8 H24 V16"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
      </div>
      
    </div>
    
  );
}
