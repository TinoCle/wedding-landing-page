"use client"

import FullPage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import Hero from "./components/Hero";
import Date from "./components/Date";
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <FullPage>
      <FullPageSections>
        <FullpageSection>
          <Hero />
        </FullpageSection>
        <FullpageSection>
          <Date />
        </FullpageSection>
        <FullpageSection>
          <Countdown />
        </FullpageSection>
      </FullPageSections>
      <FullpageNavigation />
    </FullPage>
  );
}
