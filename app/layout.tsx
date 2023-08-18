import Header from './components/header';

import './globals.css';

export const metadata = {
  title: 'Phonebook',
  description: 'A website for managing contacts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-dark bg-white dark:text-white/90 dark:bg-dark">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
