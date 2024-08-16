import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { BriefcaseBusiness, Download } from "lucide-react";

const jobs = [
  {
    title: "Senior Fullstack Engineer",
    company: "Quantilope GmBh",
    timeline: "Nov 21 - Present",
  },
  {
    title: "Senior Frontend Engineer",
    company: "About You GmBh",
    timeline: "Nov 18 - Oct 21",
  },
  {
    title: "Frontend Engineer",
    company: "Razorthink Inc",
    timeline: "Aug 16 - Sept 18",
  },
];

export const Experience = () => {
  return (
    <Card className="mt-6 self-start">
      <CardHeader className="pb-2">
        <CardTitle className="flex text-accent-foreground/80 items-center">
          Experience
          <BriefcaseBusiness
            size={"16px"}
            className="ml-2 stroke-muted-foreground"
          />
          <Button
            variant={"ghost"}
            className="ml-auto font-bold flex items-center gap-1 text-xs text-muted-foreground"
            title="Download CV"
            size={"sm"}
          >
            <Download size={"16px"} className=" stroke-muted-foreground" />
            CV
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ul>
          {jobs.map((job) => (
            <li key={job.company} className="my-4">
              <p>{job.title}</p>
              <p className="text-primary">{job.company}</p>
              <p className="text-muted-foreground">{job.timeline}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-2 justify-end">
        <Button size={"sm"} variant={"link"}>
          View more
        </Button>
      </CardFooter>
    </Card>
  );
};
