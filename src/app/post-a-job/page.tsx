"use client";

import { jobFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface PostJobPageProps {}

const PostJobPage: FunctionComponent<PostJobPageProps> = () => {
  const Form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });

  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);
  };
  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-default hover:text-primary">
        <ArrowLeftIcon className="w-7 h-7" />
        <span className="text-2xl font-semibold">Post a Job</span>
      </div>

      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-400">
          List out your top perks and benefits.
        </div>
      </div>
    </div>
  );
};

export default PostJobPage;
