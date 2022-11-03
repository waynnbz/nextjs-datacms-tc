import {
  ButtonRecord,
  FileField,
  SectionRecord,
  StructuredTextRecord,
} from 'lib/graphql';
import { Image, StructuredText } from 'react-datocms';
import React from 'react';
import Block from 'components/Block';
import cn from 'clsx';

export default function Section({
  maxWidth,
  content,
  backgroundImage,
  bottomImage,
  topLeftImage,
  backgroundColor,
  topImages,
  centerImages,
}: SectionRecord) {
  return (
    <div
      className={cn(
        `relative w-full min-h-[300px] flex flex-col items-center ${backgroundColor}`,
        {
          'mix-h-screen': topImages && topImages.length > 0,
          'overflow-hidden': topImages && topImages.length > 0,
        },
      )}
      style={{
        backgroundImage: `url('${backgroundImage?.responsiveImage?.src}')`,
      }}
    >
      {topLeftImage && (
        <Image
          className="sm:!w-[calc(50%+8rem)] !w-[calc(50%+4rem)] self-start -mb-16"
          data={topLeftImage.responsiveImage!}
        />
      )}
      {topImages &&
        topImages.map((image: FileField, index: number) => (
          <div
            key={image.id}
            className={cn('top-0 flex items-center justify-center', {
              absolute: index === 0,
              'sm:max-w-[75%]': index === 0,
              'max-w-[20%]': index === 1,
              'opacity-70': index === 1,
              '-mb-3': index === 1,
              '-mt-4': index === 0,
              // 'max-h-96': index === 0,
            })}
          >
            <Image objectFit="contain" data={image.responsiveImage!} />
          </div>
        ))}

      <div
        style={{ maxWidth: maxWidth || undefined }}
        className={cn(
          'w-full z-10 px-12 sm:px-2  flex flex-col items-center py-16',
          {
            'max-w-[805px]': !maxWidth || maxWidth === 0,
            '!p-0': topImages && topImages.length > 0,
          },
        )}
      >
        <StructuredText data={content as any} renderBlock={Block} />
      </div>

      {bottomImage && (
        <div className="w-full z-20 -mt-16">
          <Image
            objectFit="cover"
            layout="responsive"
            data={bottomImage.responsiveImage!}
          />
        </div>
      )}
      {centerImages &&
        centerImages.map((image: FileField, index: number) => (
          <div
            key={image.id}
            className={cn(
              'top-[calc(35%)] max-w-[50%] absolute w-full flex items-center justify-center z-20',
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
