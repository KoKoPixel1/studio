'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/common/PageHeader';
import { ProfileCard } from '@/components/team/ProfileCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { teamMembers } from '@/lib/placeholders';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function TeamPage() {
  return (
    <div className="animate-page-in">
      <PageHeader
        title="Meet the Team"
        subtitle="The dedicated individuals driving the IIEC forward."
      />
      <div className="container py-16 md:py-24 relative">
        <Tabs defaultValue="committee" className="w-full">
          <div className="w-full overflow-x-auto no-scrollbar pb-2">
            <TabsList className="w-max sm:w-auto sm:mx-auto">
              <TabsTrigger value="committee">Working Committee</TabsTrigger>
              <TabsTrigger value="core">Core Members</TabsTrigger>
              <TabsTrigger value="alumni">Alumni</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="committee" className="mt-12">
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {teamMembers.committee.map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ProfileCard {...member} dataAiHint={member.dataAiHint} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="core" className="mt-12">
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {teamMembers.core.map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ProfileCard {...member} dataAiHint={member.dataAiHint} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="alumni" className="mt-12">
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {teamMembers.alumni.map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ProfileCard {...member} dataAiHint={member.dataAiHint} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
