import { TwoColumnRecord } from 'lib/graphql';
import React from 'react';
import Block from 'components/Block';
import cn from 'clsx';

export default function TwoColumn({ content }: TwoColumnRecord) {
  return (
    <div className="relative w-full flex flex-col items-center justify-center my-4 sm:flex-row">
      {content.map((column, index) => (
        <div
          key={column.id}
          className={cn('flex-1 child-p-justify sm:mx-3', {
            'mx-8': index === 1,
          })}
        >
          <Block record={column} />
        </div>
      ))}
    </div>
  );
}
