export const metadata = {
  title: 'DoraDore.al',
  description: 'Crowdfunding for Albania',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}