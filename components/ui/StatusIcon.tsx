interface StatusIconProps {
  status: "in-progress" | "done";
}

export default function StatusIcon({ status }: StatusIconProps) {
  return (
    <p
      className={`flex gap-2 items-center justify-center rounded-lg px-4 py-1  font-semibold text-sm shadow-sm ${status === "done" ? "bg-green-300 text-green-800" : "bg-indigo-300 text-indigo-800"}`}
    >
      <span className="relative flex size-2">
        <span
          className={`
            absolute inline-flex h-full w-full animate-ping rounded-full opacity-75
            ${status === "done" ? "bg-green-500" : "bg-indigo-500 "}
            `}
        ></span>
        <span
          className={`relative inline-flex size-2 rounded-full 
            ${status === "done" ? "bg-green-600" : "bg-indigo-600 "}`}
        ></span>
      </span>
      {status === "done" ? "En producción" : "En progreso"}
    </p>
  );
}
