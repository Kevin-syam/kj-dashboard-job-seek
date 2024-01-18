import { Button } from "@/components/ui/button";
import { FunctionComponent } from "react";
import { GoGear } from "react-icons/go";
import { GrSchedules } from "react-icons/gr";
import {
  HiOutlineBuildingOffice2,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { TbUsersGroup } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-8 text-lg font-extrabold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none"
            >
              <IoHomeOutline className="mr-2 text-lg rounded-none hover:text-primary" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none"
            >
              <TiMessages className="mr-2 text-lg rounded-none hover:text-primary" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none"
            >
              <HiOutlineBuildingOffice2 className="mr-2 text-lg rounded-none hover:text-primary" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none"
            >
              <TbUsersGroup className="mr-2 text-lg rounded-none hover:text-primary" />
              All Aplicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none"
            >
              <HiOutlineClipboardDocumentList className="mr-2 text-lg rounded-none hover:text-primary" />
              Job Listing
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none"
            >
              <GrSchedules className="mr-2 text-lg rounded-none hover:text-primary" />
              My Shedules
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-8 text-lg font-extrabold">Settings</h2>
          <Button
            variant={"ghost"}
            className="w-full justify-start rounded-none"
          >
            <GoGear className="mr-2 text-lg rounded-none hover:text-primary" />
            Settings
          </Button>
          <Button
            variant={"ghost"}
            className=" text-red-500 hover:bg-red-200 hover:text-red-600 w-full justify-start rounded-none"
          >
            <IoIosLogOut className="mr-2 text-lg rounded-none" />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
