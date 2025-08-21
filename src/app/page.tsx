import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/src/components/primitives";
import { GithubIcon } from "@/src/components/icons";
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
