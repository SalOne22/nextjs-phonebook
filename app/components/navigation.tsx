import Link from 'next/link';
import { HTMLAttributes } from 'react';

export default function Navigation(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <nav {...props}>
      <ul className="flex gap-1">
        <li>
          <Link className="btn btn-ghost" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="btn btn-ghost" href="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
