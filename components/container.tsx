import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export function Container(props: ContainerProps) {
  return (
    <div className="flex justify-center">
      <div
        id={props.id}
        className={`w-200 pt-20 h-fit min-h-dvh ${props.className || ""}`}
      >
        {props.children}
      </div>
    </div>
  );
}
