import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Url = "service" | "course";

export interface InputButton {
  id: string;
  url: Url;
}

export interface InputCards {
  id: string;
  title: string;
  image: string;
}

export interface InputPicture {
  alt: string;
  src: string;
  width: string;
}

export interface PropsService {
  params: Promise<{ idService: string }>;
}

export interface PropsCourse {
  params: Promise<{ idCourse: string }>;
}
