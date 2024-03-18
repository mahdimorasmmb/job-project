import { Metadata } from "next";
import React from "react";
import NewJobForm from "./new-job-form";

export const metadata: Metadata = {
  title: "Post a new job",
};

const NewJobsPage = () => {
  return <NewJobForm/>
};

export default NewJobsPage;
