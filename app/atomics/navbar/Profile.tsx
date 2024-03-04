import React from 'react'
import { FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button"


const Profile = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="bg-[#21242D] hover:bg-[#21242D] hover:text-white border-none"
    >
      <FaUser className="h-4 w-4" />
    </Button>
  );
}

export default Profile