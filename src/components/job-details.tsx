import { formatMoney, relativeDate } from "@/lib/utils";
import { Job } from "@prisma/client";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Markdown from "./markdown";

interface JobDetailsProps {
  job: Job;
}

const JobDetails: FC<JobDetailsProps> = ({
  job: {
    applicationEmail,
    applicationUrl,
    approved,
    companyLogoUrl,
    companyName,
    createdAt,
    description,
    id,
    location,
    locationType,
    salary,
    slug,
    title,
    type,
    updatedAt,
  },
}) => {

    
  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        {companyLogoUrl && (
          <Image
            src={companyLogoUrl}
            alt="compony logo"
            width={100}
            height={100}
            className="rounded-xl"
          />
        )}
        <div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="font-semibold">
              {applicationUrl ? (
                <Link
                  href={new URL(applicationUrl).origin}
                  className="text-green-500 hover:underline"
                >
                  {companyName}
                </Link>
              ) : (
                <span>{companyName}</span>
              )}
            </p>
          </div>
          <div className="text-muted-foreground">
            <p className="gap-1/5 flex items-center ">
              <Briefcase size={16} className="shrink-0" />
              {type}
            </p>
            <p className="gap-1/5 flex items-center ">
              <MapPin size={16} className="shrink-0" />
              {locationType}
            </p>
            <p className="gap-1/5 flex items-center ">
              <Globe2 size={16} className="shrink-0" />
              {location || "Worldwide"}
            </p>
            <p className="gap-1/5 flex items-center ">
              <Banknote size={16} className="shrink-0" />
              {formatMoney(salary)}
            </p>
            <p className="gap-1/5 flex items-center ">
              <Clock size={16} className="shrink-0" />
              {relativeDate(createdAt)}
            </p>
          </div>
        </div>
      </div>
      <div>{description && <Markdown>{description}</Markdown>}</div>
    </section>
  );
};

export default JobDetails;
