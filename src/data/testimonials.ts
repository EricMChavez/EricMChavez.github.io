import type { Testimonial } from "./types";

// Quotes are verbatim excerpts from LinkedIn recommendations, so a reader who
// follows the link can find the same words. Trim with "…", never reword.
export const testimonials: Testimonial[] = [
  {
    name: "Amanda Olsen",
    title: "User Interface Engineer",
    company: "Expedia Group",
    profile: "https://www.linkedin.com/in/amandaolsen/",
    quote:
      "After we had collectively built the first action, Eric just took off! … At that stage, I was learning from him! … If I could staff a team of all Erics, I would do it.",
  },
  {
    name: "Noah Benham",
    title: "Sr UX Engineer",
    company: "Expedia Group",
    profile: "https://www.linkedin.com/in/noahbenham/",
    quote:
      "Eric is a dependable, detail-oriented engineer who cares deeply about the quality of both components and the tooling around them. … He's quick to identify inconsistencies, asks sharp clarifying questions, and reliably follows through with well-scoped PRs and clean implementations.",
  },
  {
    name: "Quinn Goldstein",
    title: "UX Engineer",
    company: "Expedia Group",
    profile: "https://www.linkedin.com/in/quinn-goldstein/",
    quote:
      "Eric is a thoughtful engineer with a deep understanding of front-end development … He consistently writes clean, efficient, and easy-to-read code along with being able to explain his work as needed.",
  },
  {
    name: "Isabella Heppe",
    title: "UX Engineer",
    company: "Expedia Group",
    profile: "https://www.linkedin.com/in/iheppe/",
    quote:
      "Eric has shown he is great at picking up complex issues and systems, as well as communicating his findings. … He has a proven track record of delivering clean, consistent code, and also is great at understanding and utilizing any new tools available.",
  },
];
