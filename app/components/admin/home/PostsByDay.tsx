"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface PostsByDayData {
  date: string;
  posts: number;
}

interface PostsByDayProps {
  data: PostsByDayData[];
}

const PostsByDay = ({ data }: PostsByDayProps) => {
  return (
    <ChartContainer
      config={{
        posts: {
          label: "Posts",
          color: "#0a143d",
        },
      }}
      className="md:h-75 w-full"
    >
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="posts" fill="var(--color-posts)" />
      </BarChart>
    </ChartContainer>
  );
};

export default PostsByDay;