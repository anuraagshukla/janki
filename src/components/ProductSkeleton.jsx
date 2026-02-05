export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow p-4 animate-pulse">
      <div className="h-40 bg-gray-200 rounded-lg" />
      <div className="h-4 bg-gray-200 rounded mt-4 w-3/4" />
      <div className="h-4 bg-gray-200 rounded mt-2 w-1/3" />
      <div className="h-10 bg-gray-200 rounded mt-4" />
    </div>
  );
}