import Image from 'next/image'
import BrandLogo from "@/public/Brand.svg"
import React from 'react'

const Brand = () => {
  return (
    <div>
      <Image src={BrandLogo} alt="Brand" />
    </div>
  );
}

export default Brand