import { NextSeo } from "next-seo";
import { Space } from "~/@components/atoms";
import { Main_1, Main_2, Main_3, Main_4, Main_5, Main_8 } from "~/@components/organisms";

import { PaddingLayout } from "~/@components/templates/PaddingLayout";

export default function Home() {
  return (
    <>
      <NextSeo
        title="home"
        description="home description"
        canonical="https://example.com"
        openGraph={{
          url: "https://example.com",
        }}
      />
      <PaddingLayout>
        <Main_1 />
      </PaddingLayout>
      <Space height="30px" />
      <Main_2 />
      <Space height="30px" />
      <PaddingLayout>
        <Main_3 />
      </PaddingLayout>
      <Space height="30px" />
      <PaddingLayout>
        <Main_4 />
      </PaddingLayout>
      <Space height="20px" />
      <Main_5 />
      <Main_8 />
    </>
  );
}
