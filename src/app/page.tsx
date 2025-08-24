import {
  Profile,
  AboutMe,
  Courses,
  FeedBack,
  Services,
  Networks,
} from "@/src/components";

export default function Home() {
  return (
    <section className="flex flex-col justify-center">
      <Profile />
      <AboutMe />
      <Services />
      <Courses />
      <FeedBack />
      <Networks />
    </section>
  );
}
