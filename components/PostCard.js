import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className="border rounded-lg">
          <Image
            src={`/${post.frontMatter.image}`}
            width={800}
            height={400}
            alt={post.frontMatter.title}
          />
        </div>
        <div className="px-2 py-4 mx-5">
          <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
          <span>{post.frontMatter.date}</span>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;