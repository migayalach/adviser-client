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
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        <Profile />
      </div>

      <div>
        <AboutMe />
      </div>

      <div>
        <Services />
      </div>

      <div>
        <Courses />
      </div>

      <div>
        <FeedBack />
      </div>

      <div>
        <Contact />
      </div>
    </section>
  );
}
