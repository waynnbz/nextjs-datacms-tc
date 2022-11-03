import { BookRecord } from 'lib/graphql';
import React from 'react';
import Block from 'components/Block';
import cn from 'clsx';
import { Image } from 'react-datocms';
import Button from 'components/Button';

export default function Book({
  title,
  text,
  button,
  downloadList,
}: BookRecord) {
  return (
    <div className="relative w-full flex flex-col items-center justify-center my-4">
      <div className="flex text-center font-mulish text-4xl font-extrabold">
        {title}
      </div>
      <div className="flex text-center font-mulish text-xl font-normal mt-4 sm:mb-9">
        {text}
      </div>
      <Block record={button[0]} />
      <div className="mt-9 w-96 flex flex-col border-white rounded-full">
        {downloadList.map(({ id, title, button }) => (
          <div key={id} className="flex h-20 bg-gray-100 flex-row items-center justify-between border gap-12 px-6">
            <div className='font-mulish font-bold text-start w-full'>{title}</div>
            <Block record={button[0]} />
          </div>
        ))}
      </div>
    </div>
  );
}
