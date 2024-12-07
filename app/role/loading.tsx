import React from "react";
import { Skeleton } from "../../components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen rounded-4xl">
      <Skeleton className="w-[600px] h-[200px]" />
    </div>
  );
};

export default Loading;
