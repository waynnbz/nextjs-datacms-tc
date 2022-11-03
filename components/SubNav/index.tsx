import { SubnavRecord } from 'lib/graphql';
import Link from 'next/link';
import cn from 'clsx';
import { useRouter } from 'next/router';

import styles from './subnav.module.css';

export default function SubNav({ navItems }: SubnavRecord) {
  const router = useRouter();

  return (
    <div className="flex flex-row w-full items-center justify-center">
      {navItems.map(nav => (
        <Link
          className={cn(
            ' text-lg font-mulish',
            {
              [styles.active]:
                nav.link === router.pathname,
            },
            styles.navItem,
          )}
          key={nav.id}
          href={nav?.link || '#'}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
}
