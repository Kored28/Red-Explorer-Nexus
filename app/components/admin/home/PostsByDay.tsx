"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


const PostsByDay = ({ data }: any) => {
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