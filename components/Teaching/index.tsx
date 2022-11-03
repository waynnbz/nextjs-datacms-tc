import { TeachingRecord } from 'lib/graphql';
import React from 'react';
import Block from 'components/Block';
import cn from 'clsx';
import { Image } from 'react-datocms';

export default function Teaching({ title, text, wordCards }: TeachingRecord) {
  return (
    <div className="relative w-full flex flex-col items-center justify-center my-4">
      <div className="flex text-center font-mulish text-4xl font-extrabold">
        {title}
      </div>
      <div className="flex text-center font-mulish text-xl font-normal mt-4 sm:mb-9">
        {text}
      </div>
      <div className="mt-9 w-full flex flex-col sm:grid sm:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) =>
          i === 0 || i === 2 ? (
            <div key={i} className='hidden sm:flex'></div>
          ) : (
            <div key={i} className="w-full">
              <Image
                data={wordCards[i !== 1 ? i - 2 : i - 1]?.responsiveImage!}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
