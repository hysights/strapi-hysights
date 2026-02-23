import type { Schema, Struct } from '@strapi/strapi';

export interface SharedExpertSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_expert_sections';
  info: {
    displayName: 'Expert Section';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_heroes';
  info: {
    displayName: 'Home Hero';
    icon: 'heart';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.String;
    leftImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_sliders';
  info: {
    displayName: 'Home Slider';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMarketInsight extends Struct.ComponentSchema {
  collectionName: 'components_shared_market_insights';
  info: {
    displayName: 'Market Insight';
  };
  attributes: {
    heading: Schema.Attribute.String;
    highlighted_text: Schema.Attribute.String;
    insights: Schema.Attribute.Component<'shared.market-insight-box', true>;
  };
}

export interface SharedMarketInsightBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_market_insight_boxes';
  info: {
    displayName: 'Market Insight Box';
  };
  attributes: {
    date: Schema.Attribute.Date;
    highlighted_text: Schema.Attribute.String;
    image_if_any: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSectionTitleAndHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_title_and_headings';
  info: {
    displayName: 'Who we are';
  };
  attributes: {
    heading: Schema.Attribute.String;
    highlighted_text: Schema.Attribute.String;
    slider: Schema.Attribute.Component<'shared.home-slider', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    company_name: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo_text_if_no_image: Schema.Attribute.String;
    message: Schema.Attribute.Text;
    testimonial_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedThreeBoxes extends Struct.ComponentSchema {
  collectionName: 'components_shared_three_boxes';
  info: {
    displayName: 'Text Box';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedWhoWeServe extends Struct.ComponentSchema {
  collectionName: 'components_shared_who_we_serves';
  info: {
    displayName: 'Who we serve';
  };
  attributes: {
    big_boxes: Schema.Attribute.Component<'shared.three-boxes', true>;
    heading: Schema.Attribute.String;
    highlighted_text: Schema.Attribute.String;
    small_boxes: Schema.Attribute.Component<'shared.three-boxes', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.expert-section': SharedExpertSection;
      'shared.home-hero': SharedHomeHero;
      'shared.home-slider': SharedHomeSlider;
      'shared.market-insight': SharedMarketInsight;
      'shared.market-insight-box': SharedMarketInsightBox;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-title-and-heading': SharedSectionTitleAndHeading;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.testimonial': SharedTestimonial;
      'shared.three-boxes': SharedThreeBoxes;
      'shared.who-we-serve': SharedWhoWeServe;
    }
  }
}
