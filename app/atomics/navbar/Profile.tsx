import React from "react";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Profile = () => {
  return (
    <DropdownMenu>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="bg-[#21242D] hover:bg-[#21242D] hover:text-white border-none"
      >
        <DropdownMenuTrigger className="border-none">
          <FaUser className="h-4 w-4" />
        </DropdownMenuTrigger>
      </Button>
      <DropdownMenuContent className="bg-[#21242D] text-white border-none p-3 space-y-3">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
