"use client"

import useDestinations from "@/hooks/useDestinations"
import AdminHeader from "../AdminHeader"
import useTravelTips from "@/hooks/useTravelTips"
import PostsByDay from "./PostsByDay"
import { Skeleton } from "@/components/ui/skeleton"

interface Post {
  id: string;
  title: string;
  content: string;
  featuredImage: string;
  excerpt?: string;
  country: {
    id: string;
    name: string
  }
  createdAt: string;
}

const HomeAdmin = () => {
  const { data: fetchedDestinations, isLoading } = useDestinations();
  const { data: fetchedTravelTips, isLoading: travelLoading } = useTravelTips();


  const groupByDay = (posts: Post[]) => {
    const days = {
      Sun: 0,
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
    };

    posts.forEach((post) => {
      const day = new Date(post.createdAt).toLocaleDateString("en-US", {
        weekday: "short",
      })  as keyof typeof days;

      if (days[day] !== undefined) {
        days[day] += 1;
      }
    });

    return [
      { date: "Sun", posts: days.Sun },
      { date: "Mon", posts: days.Mon },
      { date: "Tue", posts: days.Tue },
      { date: "Wed", posts: days.Wed },
      { date: "Thu", posts: days.Thu },
      { date: "Fri", posts: days.Fri },
      { date: "Sat", posts: days.Sat },
    ];
  };

  const destinationChartData = groupByDay(fetchedDestinations || []);
  const travelTipsChartData = groupByDay(fetchedTravelTips || []);

  return (
    <div className='w-full'>
      <div className="flex flex-row justify-between ">
        <AdminHeader title="Dashboard" />
      </div>

      {/* Charts */}
      <div className="w-full overflow-x-scroll md:overflow-auto">
        <div className="grid grid-cols-1 gap-6 mt-6">
        <div className="rounded-xl border p-4 w-150">
          <h3 className="mb-4 font-semibold">Destinations per Day</h3>
          {isLoading ? (
            <Skeleton className="aspect-video w-full" />
          ): (
            <PostsByDay data={destinationChartData} />
          )}
        </div>

        <div className="rounded-xl border p-4 w-150">
          <h3 className="mb-4 font-semibold">Travel Tips per Day</h3>
          
          {travelLoading ? (
            <Skeleton className="aspect-video w-full" />
          ): (
            <PostsByDay data={travelTipsChartData} />
          )}
        </div>
      </div>
      </div>

    </div>
  )
}

export default HomeAdmin