import { TEST_TITLE_MAP } from '#/app/catch-all/_constant/common';

export const dynamicParams = true;

type PageProps = {
  params: { id: string; title: string[] };
};

export type InferGenerateStaticParams<
  TPageProps extends { params: Record<string, unknown> },
> = Array<TPageProps['params']>;

export const generateStaticParams: () => InferGenerateStaticParams<PageProps> =
  () => {
    const params = TEST_TITLE_MAP.map(({ title, id }) => ({
      id: id,
      title: [title],
    }));

    return params;
  };

const Page = ({ params: { id, title } }: PageProps) => {
  return (
    <div>
      {id} {title}
    </div>
  );
};

export default Page;
