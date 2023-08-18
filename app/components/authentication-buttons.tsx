import Link from 'next/link';

export default function AuthenticationButtons() {
  return (
    <ul className="flex gap-2">
      <li>
        <Link
          className="btn btn-secondary dark:btn-outline dark:btn-outline-secondary"
          href="/login"
        >
          Log in
        </Link>
      </li>
      <li>
        <Link
          className="btn btn-primary dark:btn-outline dark:btn-outline-primary"
          href="/register"
        >
          Register
        </Link>
      </li>
    </ul>
  );
}
