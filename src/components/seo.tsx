import React from 'react';
import { I18nextContext } from 'gatsby-plugin-react-i18next';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  metaDescription: string;
}

export default function SEO({ title, metaDescription }: Props) {
  return (
  <Helmet htmlAttributes={{ lang:  React.useContext(I18nextContext).language }}>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
}
