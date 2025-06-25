'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/common/PageHeader';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { blogPosts } from '@/lib/placeholders';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function BlogPage() {
  return (
    <div className="animate-page-in">
      <PageHeader
        title="Our Blog"
        subtitle="Insights, stories, and updates from the IIEC community."
      />
      <motion.div 
        className="container py-16 md:py-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogPostCard {...post} dataAiHint={post.dataAiHint} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
