interface CourseHour {
  title: string;
  hours: string;
}

interface LearnItem {
  day: string;
  items: string[];
}

interface AboutCourse {
  title: string;
  subTitle: string;
  from: string;
  mode: string;
  hours: CourseHour;
  start: string;
  cost: string;
  learn: LearnItem[];
  include: string[];
  ask: string;
}

export interface ICourse {
  id: string;
  title: string;
  image: string;
  about: AboutCourse;
}