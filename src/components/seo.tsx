import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
}

export default function SEO({ title }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
