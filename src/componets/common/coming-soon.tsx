import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex items-center h-full justify-center flex-col">
      <h2 className="bg-gradient-to-r text-center from-blue-500 to-red-500 text-transparent bg-clip-text font-bold text-4xl">
        Coming Soon
      </h2>
      <Link href="/" className="underline">
        Return Home
      </Link>
    </div>
  );
}
