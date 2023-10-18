import React from "react";
import { Helmet } from "react-helmet";
import { WEBSITE_SHARE_IMAGE_URL } from "./defaultValues";

const CustomHelmet = ({
  title,
  description,
  contentImage = WEBSITE_SHARE_IMAGE_URL,
  canonical,
  children,
}) => {
  const canonicalUrl = canonical || window.location.pathname;
  return (
    <Helmet>
      <link
        rel="canonical"
        href={`${window.location.origin}${canonicalUrl}${window.location.search}`}
      />
      {title && <title>{title} - Usearch</title>}

      <meta property="og:image" content={contentImage} />
      <meta property="og:image:secure_url" content={contentImage} />
      {description && <meta name="description" content={description} />}

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={`${title} - Usearch`} />}
      {description && <meta property="og:description" content={description} />}
      <meta
        property="og:url"
        content={`${window.location.origin}${window.location.pathname}${window.location.search}`}
      />
      <meta property="og:site_name" content="Usearch" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="200" />
      <meta name="twitter:image" content={contentImage} />
      <meta name="twitter:card" content="summary_large_image" />
      {description && <meta name="twitter:description" content={description} />}

      {title && <meta name="twitter:title" content={`${title} - Usearch`} />}
      <meta name="twitter:site" content="@Usearch" />
      <meta name="twitter:creator" content="@Usearch" />
      <meta name="robots" content="max-image-preview:large, index, follow" />
      {children}
    </Helmet>
  );
};

export default CustomHelmet;
