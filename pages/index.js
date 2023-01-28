import { Homepage, GetStarted, RecentWork, Partners, HowItWorks } from '../components';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Homepage />
      <Partners />
      <HowItWorks />
      <RecentWork />
      <GetStarted />
    </div>
  );
}
