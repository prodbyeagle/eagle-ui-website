'use client';
import { Button, Card } from '@prodbyeagle/eagle-ui';
import { BookOpen, LayoutGrid } from 'lucide-react';

export default function DocsHome() {
	return (
		<main className='relative min-h-screen flex'>
			<div className='flex-1 p-8 z-10 flex items-center justify-center'>
				<Card className='text-center'>
					<div className='space-y-4'>
						<h1 className='text-6xl font-bold tracking-tight'>
							EagleUI Docs 🦅
						</h1>
						<p className='text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
							Everything you need to build beautiful, accessible,
							and performant interfaces with EagleUI.
						</p>
					</div>
					<div className='flex justify-center gap-3 pt-4'>
						<Button
							content='Get Started'
							icon={BookOpen}
							onClick={() =>
								(window.location.href = '/docs/getting-started')
							}
							className='px-6 py-2.5 text-lg'
						/>
						<Button
							content='Explore Components'
							icon={LayoutGrid}
							onClick={() =>
								(window.location.href = '/demo')
							}
							className='px-6 py-2.5 text-lg'
						/>
					</div>
				</Card>
			</div>
		</main>
	);
}
