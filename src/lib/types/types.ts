export type TChildren = Readonly<{
  children: React.ReactNode;
}>;

export type TParams = {
  params: Promise<{ id: string }>;
};
