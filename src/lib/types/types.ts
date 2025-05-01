export type Children = Readonly<{
  children: React.ReactNode;
}>;

export type Params = {
  params: Promise<{ id: string }>;
};
export type MetaProps = {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
};

export type Blog = {
  id: number;
  heading: string;
  image: string;
  details: string[];
  newsSection: {
    heading: string;
    content: string[];
  }[];
};

export type Services = {
  id: number;
  service: string;
  image: string;
  details: string[];
};
