import Link from 'next/link';
import { HTMLAttributes } from 'react';

import Button from './button';

export default function Navigation(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <nav {...props}>
      <ul className="flex gap-1">
        <li>
          <Button variant="ghost" as={Link} href="/">
            Home
          </Button>
        </li>
        <li>
          <Button variant="ghost" as={Link} href="/contacts">
            Contacts
          </Button>
        </li>
      </ul>
    </nav>
  );
}
