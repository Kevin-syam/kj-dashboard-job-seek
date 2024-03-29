import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job Title is required" })
    .min(3, { message: "Job Title must be at least 3 characters" }),
  jobType: z.enum(JOBTYPES, {
    required_error: "You need to select a job type",
  }),
  salaryFrom: z.string({ required_error: "Salary From is required" }),
  salaryTo: z.string({ required_error: "Salary To is required" }),
  categoryId: z.string({ required_error: "You need select a category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required Skill must be at least 1 skill" }),
  jobDescription: z
    .string({ required_error: "Job Description is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
  whoYouAre: z
    .string({ required_error: "Who-You-Are is required" })
    .min(10, { message: "Who-You-Are  must be at least 10 characters" }),
  reponsibility: z
    .string({ required_error: "Responsibilities is required" })
    .min(10, { message: "Responsibilities must be at least 10 characters" }),
  niceToHave: z
    .string({ required_error: "Nice-To-Have is required" })
    .min(10, { message: "Nice-To-Have must be at least 10 characters" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must at least 1 benefit" }),
});

export const overviewFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item?.name, { message: "Image is required" }),
  name: z.any({ required_error: "Name is required" }),
  website: z.string({ required_error: "Web is Required" }),
  location: z.string({ required_error: "Location is Required" }),
  employee: z.string({ required_error: "Employee is Required" }),
  industry: z.string({ required_error: "Industry is Required" }),
  dataFounded: z.string({ required_error: "Data Founded is Required" }),
  techStack: z
    .string()
    .array()
    .nonempty({ message: "Tech stack must be at least 1 data" }),
  description: z.string({
    required_error: "Description is required",
  }),
});
