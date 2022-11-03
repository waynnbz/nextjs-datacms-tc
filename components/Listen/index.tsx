import { ListenRecord } from 'lib/graphql';
import React from 'react';
import Block from 'components/Block';
import cn from 'clsx';
import { Image } from 'react-datocms';

export default function Listen({ title, image, button }: ListenRecord) {
  return (
    <div className="relative w-full flex flex-col-reverse items-center justify-center my-4 sm:flex-row">
      <div className={cn('flex flex-col flex-1 items-start justify-center sm:mx-3 gap-6')}>
        <div className="flex text-center font-mulish text-lg font-extrabold sm:text-3xl sm:text-start sm:leading-10">{title}</div>
        <Block record={button[0]} />
      </div>
      <div key={image?.id} className="flex-1">
        <Image data={image?.responsiveImage!} />
      </div>
    </div>
  );
}
