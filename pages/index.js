import fs from 'fs';
import matter from 'gray-matter';
import PostCard from '../components//PostCard';
import FrontPage  from './frontpage';

export const getStaticProps = () => {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const sortedPosts = posts.sort((postA, postB) => new Date(postA.frontMatter.data) > new Date(postB.frontMatter.date) ? -1 : 1);

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export default function Home({ posts }) {
  return (
    <div className="my-8 mx-auto">
      <FrontPage />
      <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4 m-5">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
