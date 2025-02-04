'use client';
import Image from 'next/image';
import { Button, Gradient } from '@prodbyeagle/eagle-ui';
import { Book, Bot } from 'lucide-react';

export default function Home() {
	return (
		<main className='relative min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-neutral-200 overflow-hidden'>
			<Gradient
				warpIntensity={0.2}
				speed={0.3}
				colors={[
					'#ca9bee',
					'#8b64a8',
					'#523868',
					'#4f2c74',
					'#ff6f61',
					'#ffcc00',
				]}
				className='absolute inset-0 z-1'
			/>
			<div className='text-center space-y-6 max-w-3xl z-10'>
				<h1 className='text-6xl font-semibold text-neutral-100/25 tracking-tight'>
					EagleUI{' '}
					<Image
						src='https://images.emojiterra.com/google/android-12l/512px/1f985.png'
						width={96}
						height={96}
						alt='EagleUI'
						unoptimized
						className='rotate-0 hover:scale-200 hover:rotate-750 hover:translate-x-1 hover:-translate-y-5 duration-2500 ease-in-out inline-block'
					/>
				</h1>
				<p className='text-lg text-neutral-400'>
					A meticulously crafted UI library following
					Prodbyeagle&apos;s design principles. Minimal, modern, and
					designed for the best UX.
				</p>
				<div className='flex justify-center gap-4'>
					<Button
						content='Coming Soon'
						icon={Book}
						disabled
						onClick={() => (window.location.href = '/docs')}
					/>
					<Button
						content='View Demo Page'
						icon={Bot}
						onClick={() => (window.location.href = '/demo')}
					/>
				</div>
			</div>
		</main>
	);
}
