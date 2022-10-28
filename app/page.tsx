import { HeroSection } from "../components/home/HeroSection";
import { RecentPosts } from "../components/home/RecentPosts";
export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      <HeroSection />
      <RecentPosts />
    </div>
  );
}
