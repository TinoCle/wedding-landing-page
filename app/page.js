"use client"

import Hero from "./components/Hero";
import Date from "./components/Date";

import FullPage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'

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
          <Hero />
        </FullpageSection>
      </FullPageSections>
      <FullpageNavigation />
    </FullPage>
  );
}
