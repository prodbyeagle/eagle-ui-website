import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const font = Geist({
	variable: '--font-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'EagleUI 🦅 – by @prodbyeagle',
	description: 'A modern UI library inspired by @prodbyeagle.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${font.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	);
}
