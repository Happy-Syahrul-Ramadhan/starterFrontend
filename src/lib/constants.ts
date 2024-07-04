import { iMetaData } from "../interfaces/common";
export const WEBSITE_NAME = "NextJs, MDX Blog Template";
export const WEBSITE_URL = "https://nextjs-mdx-blog-template.web.app/";
export const WEBSITE_TWITTER_HANDLE = "@twitter";
export const DEFAULT_OG_IMAGE = "/public/assets/blog/cover-1.png";

export const DEFAULT_SEO: iMetaData = {
  title: "HMSD Adyatama",
  description: "HMSD Adyatama",
  keywords:
    "Web Informatin",
  author: `Admin`,
  twitterHandle: WEBSITE_TWITTER_HANDLE,
  ogImage: DEFAULT_OG_IMAGE,
};

export const ALL_ARTICLES_PAGE_SEO: iMetaData = {
  ...DEFAULT_SEO,
  title: "All Articles",
};

export const TERMS_PAGE_SEO: iMetaData = {
  ...DEFAULT_SEO,
  title: "Terms and conditions",
  description: `These terms and conditions outline the rules and regulations for the use of Website, located at ${WEBSITE_URL}.`,
};


