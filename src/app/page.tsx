import {
  Profile,
  AboutMe,
  Contact,
  Courses,
  FeedBack,
  Services,
} from "@/src/components";

export default function Home() {
  return (
    <section className="">
      <Profile />
      <AboutMe />
      <Services />
      <Courses />
      <FeedBack />
      <Contact />
    </section>
  );
}
