export type Children = Readonly<{
  children: React.ReactNode;
}>;

export type Params = {
  params: Promise<{ id: string }>;
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
