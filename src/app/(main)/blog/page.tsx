import { PageHeader } from '@/components/common/PageHeader';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { blogPosts } from '@/lib/placeholders';

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        title="Our Blog"
        subtitle="Insights, stories, and updates from the IIEC community."
      />
      <div className="container py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} dataAiHint={post.dataAiHint} />
          ))}
        </div>
      </div>
    </div>
  );
}
