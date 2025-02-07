import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
// import { DocsSidebar } from '@/components/Sidebar';

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
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body
				className={`${font.variable} font-sans antialiased bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200`}
			>
				<div className='flex'>
					{/* <DocsSidebar /> */}
					<main className='flex-1'>{children}</main>
				</div>
			</body>
		</html>
	);
}
