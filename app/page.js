"use client"

import FullPage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import Hero from "./components/Hero";
import Date from "./components/Date";
import Countdown from "./components/Countdown";
import Ceremony from './components/Ceremony';
import Celebration from './components/Celebration';
import Dresscode from './components/Dresscode';
import Songs from './components/Songs';
import Gifts from './components/Gifts';
import Accomodations from './components/Accomodations';
import Form from './components/Form';
import Food from './components/Food';


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
        <FullpageSection>
          <Ceremony />
        </FullpageSection>
        <FullpageSection>
          <Celebration />
        </FullpageSection>
        <FullpageSection>
          <Dresscode />
        </FullpageSection>
        <FullpageSection>
          <Songs />
        </FullpageSection>
        <FullpageSection>
          <Accomodations />
        </FullpageSection>
        <FullpageSection>
          <Form />
        </FullpageSection>
        <FullpageSection>
          <Food />
        </FullpageSection>
        <FullpageSection>
          <Gifts />
        </FullpageSection>
      </FullPageSections>
      <FullpageNavigation />
    </FullPage>
  );
}
