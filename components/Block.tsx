import {
  BookRecord,
  ButtonRecord,
  FaqQuestionRecord,
  FooterRecord,
  HeroRecord,
  HintTextRecord,
  ImageRecord,
  ListenRecord,
  NavbarRecord,
  SectionRecord,
  StructuredTextRecord,
  SubnavRecord,
  TeachingRecord,
  TwoColumnRecord,
  VideoThumbnailRecord,
  WordCarouselRecord,
} from 'lib/graphql';
import Button from 'components/Button';
import Section from 'components/Section';
import TwoColumn from 'components/TwoColumn';
import { Image, StructuredText } from 'react-datocms';
import React from 'react';
import VideoThumbnail from 'components/VideoThumbnail';
import WordsCarousel from 'components/WordsCarousel';
import FaqQuestion from 'components/FaqQuestion';
import Hero from 'components/Hero';
import Navbar from './NavBar';
import Footer from './Footer';
import SubNav from './SubNav';
import Listen from './Listen';
import Teaching from './Teaching';
import Book from './Book';

export default function Block({ record }: { record: any }) {
  switch (record.__typename) {
    case 'SectionRecord':
      const section = record as SectionRecord;
      return <Section {...section} />;
    case 'ButtonRecord':
      const button = record as ButtonRecord;
      return (
        <Button
          title={button.title!}
          style={button.style!}
          link={button.link!}
        />
      );
    case 'ImageRecord':
      const { image } = record as ImageRecord;
      return image?.responsiveImage ? (
        <Image className="my-4" data={image.responsiveImage!} />
      ) : (
        <img className="my-4" alt={image?.alt ?? ''} src={image?.url} />
      );
    case 'TwoColumnRecord':
      const cols = record as TwoColumnRecord;
      return <TwoColumn {...cols} />;
    case 'StructuredTextRecord':
      const textRecord = record as StructuredTextRecord;
      console.log('@INSIDE BLOCK/STRUCTURED:  ', textRecord);

      return (
        <StructuredText data={textRecord.content as any} renderBlock={Block} />
      );
    case 'VideoThumbnailRecord':
      const videoThumbnail = record as VideoThumbnailRecord;
      return <VideoThumbnail {...videoThumbnail} />;
    case 'WordCarouselRecord':
      const wordsCarousel = record as WordCarouselRecord;
      return <WordsCarousel {...wordsCarousel} />;
    case 'HintTextRecord':
      const hintTextRecord = record as HintTextRecord;
      return (
        <span className="font-mulish font-medium text-sm">
          {hintTextRecord.text}
        </span>
      );
    case 'FaqQuestionRecord':
      const faqQuestion = record as FaqQuestionRecord;
      return <FaqQuestion {...faqQuestion} />;
    case 'NavbarRecord':
      const navbar = record as NavbarRecord;
      return <Navbar {...navbar} />;
    case 'SubnavRecord':
      const subnav = record as SubnavRecord;
      return <SubNav {...subnav} />;
    case 'FooterRecord':
      const footer = record as FooterRecord;
      return <Footer {...footer} />;
    case 'ListenRecord':
      const listen = record as ListenRecord;
      return <Listen {...listen} />;
    case 'TeachingRecord':
      const teaching = record as TeachingRecord;
      return <Teaching {...teaching} />;
    case 'BookRecord':
      const book = record as BookRecord;
      return <Book {...book} />;
    case 'HeroRecord':
      const hero = record as HeroRecord;
      return <Hero {...hero} />;
    default:
      return <span>{record.__typename}</span>;
  }
}
