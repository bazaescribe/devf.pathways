import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <Image src="/brand/logo.png" width={125} height={28} alt='dev.f'></Image>
  );
};

export default Logo;