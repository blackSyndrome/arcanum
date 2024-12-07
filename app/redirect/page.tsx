"use client";

import React from "react";
import { Skeleton } from "../../components/ui/skeleton";

const RedirectPageSkeleton = () => {
  return (
    <div className="flex flex-col min-h-screen  overflow-hidden">
      <div className=" w-full flex items-center h-16 px-12 py-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-32" />
        </div>
        <div className="flex gap-8 ml-auto">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-20" />
        </div>
        <div className="ml-8">
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 flex items-center justify-center px-12">
        <div className="w-full max-w-3xl rounded-xl p-8">
          <div className="mb-6">
            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-6 w-48" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>

      <div className=" py-4 px-10 flex flex-wrap justify-between items-center text-sm">
        <div className="space-y-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-40" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>
    </div>
  );
};

export default RedirectPageSkeleton;
