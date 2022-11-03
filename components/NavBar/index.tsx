import { FileField, NavbarRecord } from 'lib/graphql';
import { Image } from 'react-datocms';
import React from 'react';
import Block from 'components/Block';
import cn from 'clsx';

export default function Navbar({ staticImages }: NavbarRecord) {
  return (
    <div
      className={cn(
        `relative w-full flex flex-row items-center justify-between`,
      )}
    >
      {staticImages &&
        staticImages.map((image: FileField, index: number) => (
          <div
            key={image.id}
            className={cn(
              'top w-full flex items-center justify-center',
              {
                hidden: index === 0,
                'sm:flex': index === 0,
                'sm:hidden': index === 1,
                // 'max-h-96': index === 0,
              },
            )}
          >
            <Image data={image.responsiveImage!} />
          </div>
        ))}
    </div>
  );
}
