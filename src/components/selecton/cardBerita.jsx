export function CardPlacehoderSkeleton() {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className=" bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          {/* Image Skeleton */}
          <div className="h-56 w-full bg-gray-300"></div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>

            {/* Description */}
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>

            {/* Button */}
            <div className="h-4 bg-gray-300 rounded w-32 mt-4"></div>
          </div>
        </div>
      ))}
    </>
  );
}
