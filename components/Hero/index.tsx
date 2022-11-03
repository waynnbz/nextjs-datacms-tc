import {
  ButtonRecord,
  FileField,
  HeroRecord,
  SectionRecord,
  StructuredTextRecord,
} from 'lib/graphql';
import { Image, StructuredText } from 'react-datocms';
import React from 'react';
import Block from 'components/Block';
import cn from 'clsx';

export default function Hero({
  leftImage,
  rightImage,
  centerImages,
  backgroundImage,
  backgroundColor,
}: HeroRecord) {
  return (
    <div
      className={cn(
        `relative w-full flex flex-row items-center justify-between ${backgroundColor}`,
      )}
      style={{
        backgroundImage: `url('${backgroundImage?.responsiveImage?.src}')`,
      }}
    >
      {leftImage && (
        <Image
          objectFit="cover"
          objectPosition="right"
          className="sm:h-[459px] h-[414px] md:mr-[20%]"
          data={(leftImage as any).responsiveImage!}
        />
      )}
      {centerImages &&
        centerImages.map((image: FileField, index: number) => (
          <div
            key={image.id}
            className={cn(
              'top-[calc(35%)] max-w-[50%] -m-[20%] flex items-center justify-center z-20',
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
      {rightImage && (
        <Image
          objectFit="cover"
          objectPosition="left"
          className="sm:h-[459px] h-[414px] md:ml-[20%]"
          data={rightImage.responsiveImage!}
        />
      )}
    </div>
  );
}
