export type ImageMeta = {
    width?: number;
    height?: number;
    type?: string;
};

export type AlternateTag = {
    href: string;
    hreflang: string;
};

export type SEOData = {
    title?: string;
    description?: string;
    author: string | null;
    image: string | null;
    url: string | null;
    enableTitleSuffix: boolean;
    imageMeta: ImageMeta | null;
    published_time: string | null; // ISO String dari Carbon
    modified_time: string | null; // ISO String dari Carbon
    articleBody: string | null;
    section: string | null;
    tags: string[] | null;
    twitter_username: string | null;
    schema: any | null;
    type: 'website' | 'article' | 'book' | 'profile' | string | null;
    site_name: string | null;
    favicon: string | null;
    locale: string | null;
    robots: string | null;
    canonical_url: string | null;
    openGraphTitle: string | null;
    alternates: AlternateTag[] | null;
};
