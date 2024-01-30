import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";

interface JobDetailPageProps {}

const JobDetailPage: FunctionComponent<JobDetailPageProps> = () => {
  return (
    <div>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href="/job-listings">
            <ArrowLeftIcon className="w-9 h-9" />
          </Link>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-1">Brand Designer</div>
          <div>Design . Full-Time . 1/10 Hired</div>
        </div>
      </div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Applicants</TabsTrigger>
          <TabsTrigger value="password">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Applicants />
        </TabsContent>
        <TabsContent value="password">
          <JobDetail />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobDetailPage;
