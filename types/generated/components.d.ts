import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksImageSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_sections';
  info: {
    displayName: 'Image Section';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_texts';
  info: {
    displayName: 'Rich Text';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface ComponentsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_sections';
  info: {
    displayName: 'Footer Section';
  };
  attributes: {
    footerLink: Schema.Attribute.Component<'components.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutFeaturedNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_featured_news_sections';
  info: {
    displayName: 'Featured News Section';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    footerSection: Schema.Attribute.Component<
      'components.footer-section',
      true
    >;
    footerText: Schema.Attribute.String;
    logoText: Schema.Attribute.Component<'components.link', false>;
    socialLink: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.Component<'components.link', false>;
    navLink: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface LayoutTopStoriesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_stories_sections';
  info: {
    displayName: 'Top Stories Section';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    description: Schema.Attribute.String;
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

export interface SharedNewsTicker extends Struct.ComponentSchema {
  collectionName: 'components_shared_news_tickers';
  info: {
    displayName: 'News Ticker';
  };
  attributes: {
    link: Schema.Attribute.Component<'components.link', true>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero': BlocksHero;
      'blocks.image-section': BlocksImageSection;
      'blocks.rich-text': BlocksRichText;
      'components.footer-section': ComponentsFooterSection;
      'components.link': ComponentsLink;
      'layout.featured-news-section': LayoutFeaturedNewsSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.top-stories-section': LayoutTopStoriesSection;
      'shared.media': SharedMedia;
      'shared.news-ticker': SharedNewsTicker;
      'shared.quote': SharedQuote;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
