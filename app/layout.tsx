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
      <body>{children}</body>
    </html>
  );
}
