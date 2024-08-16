import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { BriefcaseBusiness, Download, Hammer } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const tools = [
  {
    label: "Typescript",
    level: 95,
  },
  {
    label: "Node JS",
    level: 95,
  },
  {
    label: "HTML/CSS",
    level: 90,
  },
  {
    label: "React",
    level: 90,
  },
  {
    label: "Rust",
    level: 40,
  },
  {
    label: "MongoDB",
    level: 70,
  },
  {
    label: "SQL",
    level: 50,
  },
  {
    label: "Prisma",
    level: 50,
  },
  {
    label: "Drizzle ORM",
    level: 50,
  },
  {
    label: "Next JS",
    level: 60,
  },
  {
    label: "Astro",
    level: 60,
  },
  {
    label: "VS Code",
    level: 85,
  },
];

export const Tools = () => {
  return (
    <Card className="mt-6 self-start">
      <CardHeader className="pb-2">
        <CardTitle className="flex text-accent-foreground/80 items-center">
          Tools of Choice
          <Hammer size={"16px"} className="ml-2 stroke-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ul className="">
          {tools.map((tool) => (
            <li
              key={tool.label}
              className="my-2.5 grid items-center grid-cols-2 gap-2"
            >
              <p>{tool.label}</p>
              <Progress value={tool.level} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
