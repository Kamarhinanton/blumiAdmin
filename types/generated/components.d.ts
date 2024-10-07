import type { Struct, Schema } from '@strapi/strapi';

export interface HomeListSlider extends Struct.ComponentSchema {
  collectionName: 'components_home_list_sliders';
  info: {
    displayName: 'List-slider';
    description: '';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface HomeListMarked extends Struct.ComponentSchema {
  collectionName: 'components_home_list_markeds';
  info: {
    displayName: 'List-marked';
  };
  attributes: {
    item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeListImages extends Struct.ComponentSchema {
  collectionName: 'components_home_list_images';
  info: {
    displayName: 'List-images';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface HomeListIcons extends Struct.ComponentSchema {
  collectionName: 'components_home_list_icons';
  info: {
    displayName: 'List-icons';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeListCities extends Struct.ComponentSchema {
  collectionName: 'components_home_list_cities';
  info: {
    displayName: 'List-cities';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeLatestListing extends Struct.ComponentSchema {
  collectionName: 'components_home_latest_listings';
  info: {
    displayName: 'LatestListing';
  };
  attributes: {
    title: Schema.Attribute.Component<'base.title-component', false> &
      Schema.Attribute.Required;
    listCities: Schema.Attribute.Component<'home.list-cities', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    listSlider: Schema.Attribute.Component<'home.list-slider', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 4;
        },
        number
      >;
  };
}

export interface HomeHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_home_how_it_works';
  info: {
    displayName: 'HowItWorks';
    description: '';
  };
  attributes: {
    listSlider: Schema.Attribute.Component<'home.list-slider', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 4;
        },
        number
      >;
    heading: Schema.Attribute.Component<'base.title-component', false> &
      Schema.Attribute.Required;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    list: Schema.Attribute.Component<'home.list-marked', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    picture: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'base.cta', false> &
      Schema.Attribute.Required;
    listIcons: Schema.Attribute.Component<'home.list-icons', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      >;
    heading: Schema.Attribute.Component<'base.title-component', false> &
      Schema.Attribute.Required;
  };
}

export interface HomeExploreTreatment extends Struct.ComponentSchema {
  collectionName: 'components_home_explore_treatments';
  info: {
    displayName: 'ExploreTreatment';
    description: '';
  };
  attributes: {
    listImages: Schema.Attribute.Component<'home.list-images', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    buttonText: Schema.Attribute.String;
    heading: Schema.Attribute.Component<'base.title-component', false> &
      Schema.Attribute.Required;
  };
}

export interface FooterInnerFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_inner_footer_columns';
  info: {
    displayName: 'Column';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Component<'base.list', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface FooterInnerCopyright extends Struct.ComponentSchema {
  collectionName: 'components_footer_inner_copyrights';
  info: {
    displayName: 'copyright';
  };
  attributes: {
    year: Schema.Attribute.String & Schema.Attribute.Required;
    copyrightText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseTitleWithIcons extends Struct.ComponentSchema {
  collectionName: 'components_base_title_with_icons';
  info: {
    displayName: 'TitleWithIcons';
  };
  attributes: {
    text: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface BaseTitleComponent extends Struct.ComponentSchema {
  collectionName: 'components_base_title_components';
  info: {
    displayName: 'TitleComponent';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.String;
    subText: Schema.Attribute.Text;
    titleWithIcons: Schema.Attribute.Component<'base.title-with-icons', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface BaseList extends Struct.ComponentSchema {
  collectionName: 'components_base_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseCta extends Struct.ComponentSchema {
  collectionName: 'components_base_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    placeholderText: Schema.Attribute.String & Schema.Attribute.Required;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.list-slider': HomeListSlider;
      'home.list-marked': HomeListMarked;
      'home.list-images': HomeListImages;
      'home.list-icons': HomeListIcons;
      'home.list-cities': HomeListCities;
      'home.latest-listing': HomeLatestListing;
      'home.how-it-works': HomeHowItWorks;
      'home.hero': HomeHero;
      'home.explore-treatment': HomeExploreTreatment;
      'footer-inner.footer-column': FooterInnerFooterColumn;
      'footer-inner.copyright': FooterInnerCopyright;
      'base.title-with-icons': BaseTitleWithIcons;
      'base.title-component': BaseTitleComponent;
      'base.list': BaseList;
      'base.cta': BaseCta;
    }
  }
}
