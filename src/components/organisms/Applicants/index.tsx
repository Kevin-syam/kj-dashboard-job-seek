import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA } from "@/constants";
import { FunctionComponent } from "react";
import ButtonActionTable from "../ButtonActionTable";

interface ApplicantsProps {}

const Applicants: FunctionComponent<ApplicantsProps> = () => {
  return (
    <>
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_APPLICANT_COLUMNS.map((item: string, i: number) => (
                <TableHead key={item + i}>{item}</TableHead>
              ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {JOB_APPLICANT_DATA.map((item: any, i: number) => (
              <TableRow key={item.roles + i}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.appliedDate}</TableCell>
                <TableCell>
                  <ButtonActionTable url="" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Applicants;
