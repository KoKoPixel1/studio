import { PageHeader } from '@/components/common/PageHeader';
import { ProfileCard } from '@/components/team/ProfileCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { teamMembers } from '@/lib/placeholders';

export default function TeamPage() {
  return (
    <div>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.committee.map((member, index) => (
                <ProfileCard key={index} {...member} dataAiHint={member.dataAiHint} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="core" className="mt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.core.map((member, index) => (
                <ProfileCard key={index} {...member} dataAiHint={member.dataAiHint} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="alumni" className="mt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.alumni.map((member, index) => (
                <ProfileCard key={index} {...member} dataAiHint={member.dataAiHint} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
