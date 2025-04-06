import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import { getAllPostsForHome, getGlobalSeo } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description }) => (
  <motion.div
    className="p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
    whileHover={{ y: -10 }}
  >
    <h3 className="text-2xl mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default function Index({ allPosts, title }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <Intro title={title} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}

          <section className="py-20">
            <motion.h2
              className="text-4xl mb-16 text-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <ServiceCard
                title="Web Development"
                description="Modern web applications with cutting-edge tech"
              />
              <ServiceCard
                title="Consulting"
                description="Technical strategy and architecture guidance"
              />
              <ServiceCard
                title="Training"
                description="Custom workshops and team coaching"
              />
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  const globalSeo = await getGlobalSeo();

  const title =
    `${globalSeo?.siteName}${globalSeo?.titleSuffix}` ||
    "Illia Zub on Programming, Education, Wellbeing, and having fun";

  return {
    props: { allPosts, title },
  };
}
