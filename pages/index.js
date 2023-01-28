import { Homepage, GetStarted, RecentWork, Partners, HowItWorks, Scope } from '../components';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Homepage />
      <Partners />
      <HowItWorks />
      <RecentWork />
      <Scope />
      <GetStarted />
    </div>
  );
}
