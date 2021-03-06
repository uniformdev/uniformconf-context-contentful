// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface I3ZPkEj1KqeSn4QdsdnNko3Fields {
  /** Personalized Hero Name */
  name: string;

  /** Hero Options */
  unfrmOptP13nList: IHero[];
}

export interface I3ZPkEj1KqeSn4QdsdnNko3 extends Entry<I3ZPkEj1KqeSn4QdsdnNko3Fields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: '3zPkEj1KqeSn4QdsdnNKO3';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ICtaFields {
  /** Heading */
  heading?: string | undefined;

  /** Subheading */
  subheading?: string | undefined;

  /** Button Link */
  buttonLink?: string | undefined;

  /** Button Text */
  buttonText?: string | undefined;

  /** Button Image */
  buttonImage?: Asset | undefined;
}

export interface ICta extends Entry<ICtaFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'cta';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHeroFields {
  /** Title */
  title: string;

  /** Description */
  description: string;

  /** Button Text */
  buttonText?: string | undefined;

  /** image */
  image?: Asset | undefined;

  /** Button Link Slug */
  buttonLinkSlug?: string | undefined;

  /** Personalization Criteria */
  unfrmOptPersonalizationCriteria?: Record<string, any> | undefined;
}

export interface IHero extends Entry<IHeroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'hero';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPageFields {
  /** Title */
  title?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Components */
  components?:
    | (
        | ICta
        | IHero
        | I3ZPkEj1KqeSn4QdsdnNko3
        | IPersonalizedTalkList
        | IRegistrationForm
        | ITalksList
        | IWhyAttend
      )[]
    | undefined;

  /** Enrichment Tags */
  unfrmOptEnrichmentTag?: Record<string, any> | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'page';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPersonalizedTalkListFields {
  /** List Name */
  title: string;
  /** List Items */
  unfrmOptP13nList: ITalksList[];
}

export interface IPersonalizedTalkList extends Entry<IPersonalizedTalkListFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'PersonalizedTalkList';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IRegistrationFormFields {
  /** Heading */
  heading?: string | undefined;

  /** ButtonText */
  buttonText?: string | undefined;

  /** Registered Text */
  registeredText?: string | undefined;
}

export interface IRegistrationForm extends Entry<IRegistrationFormFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'registrationForm';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITalkFields {
  /** Title */
  title: string;

  /** Description */
  description: Document;

  /** Audience */
  audience?: ('Developers' | 'Marketers')[] | undefined;

  /** Personalization Criteria */
  unfrmOptPersonalizationCriteria?: Record<string, any> | undefined;
}

export interface ITalk extends Entry<ITalkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'talk';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITalksListFields {
  /** Title */
  title: string;

  /** Title When Personalized */
  p13nTitle?: string | undefined;

  /** NumberToShow */
  count?: number | undefined;

  /** Register Button Text */
  registerButtonText?: string | undefined;

  /** Personalization Criteria */
  unfrmOptPersonalizationCriteria?: Record<string, any> | undefined;

  /** Talks */
  talks: ITalk[];
}

export interface ITalksList extends Entry<ITalksListFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'talksList';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IWhyAttendFields {
  /** Title */
  title?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Image */
  image?: Asset | undefined;
}

export interface IWhyAttend extends Entry<IWhyAttendFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'whyAttend';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | '3zPkEj1KqeSn4QdsdnNKO3'
  | 'cta'
  | 'hero'
  | 'page'
  | 'PersonalizedTalkList'
  | 'registrationForm'
  | 'talk'
  | 'talksList'
  | 'whyAttend';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
