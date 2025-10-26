export interface MetaProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  websitePath?: string;
}

export interface MetaConfig {
  baseUrl: string;
  baseImage: string;
  site_name: string;
  website_category: string;
  applicationName: string;
  facebook_app_id: string;
  authors_name: string;
  authorPortfolio: string;
  twitter_site: string;
  protectedCrawlRoutes: string[];
}

export interface Routes {
  url: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
}
