import { getGlobalSeo } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";

export default function Intro({ title, description }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-4">
        {title},<br />
        {description}
      </h1>
    </section>
  );
}

export async function getStaticProps({ preview = false }) {
  const globalSeo = await getGlobalSeo();

  const title = "Ilya Zub";
  const description = "Software Engineer";

  return {
    props: { title, description },
  };
}
