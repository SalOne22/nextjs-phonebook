import AuthenticationButtons from './authentication-buttons';
import Navigation from './navigation';

export default function Header() {
  return (
    <header className="py-2 px-8 bg-slate-200 dark:bg-darker flex">
      <Navigation className="flex-1" />
      <AuthenticationButtons />
    </header>
  );
}
