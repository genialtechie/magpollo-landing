import { Homepage, GetStarted, RecentWork, Partners, HowItWorks } from '../components';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Homepage />
      <RecentWork />
      <GetStarted />
      <Partners />
      <HowItWorks />
    </div>
  );
}
