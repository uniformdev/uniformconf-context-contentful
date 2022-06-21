import { ComponentType } from 'react';
import { Entry } from 'contentful';
import { DefaultNotImplementedComponent } from './DefaultNotImplementedComponent';
import { Hero } from './Hero';
import { TalkList } from './TalkList';
import { WhyAttendTestPhotoLocation } from './WhyAttend';
import { Talk } from './Talk';
import { RegisterForm } from './RegisterForm';
import Navbar from './Navbar';
import Footer from './Footer';
import { PersonalizedHeroList } from './PersonalizedHeroList';
import type {
  IHero,
  I3ZPkEj1KqeSn4QdsdnNko3,
  ICta,
  IPage,
  IPersonalizedTalkList,
  IRegistrationForm,
  ITalk,
  ITalksList,
  IWhyAttend,
} from '../@types/generated/contentful';

// @todo fix usage of union type.
export type EntryUnionType =
  | IHero
  | IPage
  | I3ZPkEj1KqeSn4QdsdnNko3
  | ICta
  | IPersonalizedTalkList
  | IRegistrationForm
  | ITalk
  | ITalksList
  | IWhyAttend;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentMapping = Record<string, ComponentType<any>>;

const mappings: ComponentMapping = {
  hero: Hero,
  talksList: TalkList,
  personalizedTalkList: TalkList,
  talk: Talk,
  whyAttend: WhyAttendTestPhotoLocation,
  registrationForm: RegisterForm,
  header: Navbar,
  footer: Footer,
  '3zPkEj1KqeSn4QdsdnNKO3': PersonalizedHeroList,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resolveRenderer(contentfulEntry: Entry<any>): ComponentType<Entry<any>> {
  const componentImpl = mappings[contentfulEntry.sys.contentType.sys.id];
  return componentImpl ?? DefaultNotImplementedComponent;
}

export default mappings;
