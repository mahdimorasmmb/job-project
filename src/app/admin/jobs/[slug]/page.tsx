import JobDetails from "@/components/job-details";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React, { FC } from "react";
import AdminSidebar from "./admin-sidebar";

interface JobAdminPageProps {
  params: { slug?: string };
}

const JobAdminPage: FC<JobAdminPageProps> = async ({ params: { slug } }) => {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return (
    <main className="m-auto my-10 max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobDetails job={job} />
      <AdminSidebar job={job} />
    </main>
  );
};

export default JobAdminPage;
