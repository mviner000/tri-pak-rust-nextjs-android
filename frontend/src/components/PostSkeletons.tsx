import { Skeleton } from "@/components/ui/skeleton"

export function PostSkeletons() {
  return (
    <div className="space-y-10">
        Friend Profile
      {/* 1. Friend Profile Skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-[200px]" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </div>

      {/* 2. Friend Post Skeleton */}
      <div className="space-y-3">
      Friend Post
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-64 w-full" />
        <div className="flex justify-between">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>

      {/* 3. Sponsored Post Skeleton */}
      <div className="space-y-3">
      Sponsored Post
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>

      {/* 4. Suggested Friends Skeleton */}
      <div className="space-y-3">
      Suggested Friends
        <Skeleton className="h-4 w-[150px]" />
        <div className="flex space-x-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-32 w-32 rounded-lg" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-8 w-32" />
            </div>
          ))}
        </div>
      </div>

      {/* 5. Stories Skeleton */}
      <div className="space-y-3">
      Stories
        <Skeleton className="h-4 w-[100px]" />
        <div className="flex space-x-4 overflow-x-auto">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-48 w-28 rounded-lg flex-shrink-0" />
          ))}
        </div>
      </div>

      {/* 6. Event Skeleton */}
      <div className="space-y-3">
      Events
        <Skeleton className="h-4 w-[150px]" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-16 w-16 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </div>

      {/* 7. Marketplace Item Skeleton */}
      <div className="space-y-3">
      Marketplace Item
        <Skeleton className="h-4 w-[150px]" />
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-40 w-full rounded-lg" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[80px]" />
            </div>
          ))}
        </div>
      </div>

      {/* 8. Group Suggestion Skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-[200px]" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-16 w-16 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>

      {/* 10. Live Video Skeleton */}
      <div className="space-y-3">
      Live Video
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-64 w-full rounded-lg" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
        <div className="flex space-x-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  )
}