import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Tag from '../../components/Tag';
import { marked } from 'marked';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkToc from 'remark-toc';


export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content, slug: params.slug } };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
const Post = ({ frontMatter, content, slug }) => {
  return (
    <>
      <NextSeo
          title={frontMatter.title}
          description={frontMatter.description}
          openGraph={{
            type: 'website',
            url: `http:localhost:3000/posts/${slug}`,
            title: frontMatter.title,
            description: frontMatter.description,
            images: [
              {
                url: `https://localhost:3000/${frontMatter.image}`,
                width: 1200,
                height: 700,
                alt: frontMatter.title,
              },
            ],
          }}
        />
        <div className="mx-36">
          <div className="pt-36 prose max-w-none">
            <div className="text-center">
              <Image
                src={`/${frontMatter.image}`}
                width={800}
                height={300}
                alt={frontMatter.title}
              />
            </div>
            <div className="relative flex mt-12">
              <div className="space-x-2">
                <h1 className="font-bold text-3xl">{frontMatter.title}</h1>
                <span>{frontMatter.date}</span>
              </div>
              <div className="absolute right-0">
                {frontMatter.categories.map((category) => (
                  <span key={category}>
                    <Link href={`/categories/${category}`}>
                      <Tag text={category} />
                    </Link>
                  </span>
                ))}
              </div>
            </div>
            <div className="leading-9 text-lg" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
    </>
  );
};


export default Post;