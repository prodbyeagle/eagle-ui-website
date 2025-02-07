'use client';

import Image from 'next/image';
import { Button, Gradient } from '@prodbyeagle/eagle-ui';
import { Book } from 'lucide-react';

export default function NotFound() {
	return (
		<main className='relative min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-neutral-200 overflow-hidden'>
			<Gradient
				warpIntensity={0.2}
				speed={0.3}
				colors={[
					'#6b4b7e', // Darker purple (from #ca9bee)
					'#4a3560', // Deep violet (from #8b64a8)
					'#33233f', // Almost black with a purple tint (from #523868)
					'#2a1c34', // Near-black with dark purple (from #4f2c74)
					'#1d1524', // Darkest purple-black (new)
					'#100c14', // Almost black with a subtle hue (new)
				]}
				className='absolute inset-0 z-1'
			/>
			<div className='text-center space-y-6 max-w-3xl z-10'>
				<h1 className='text-6xl font-semibold text-neutral-100/50 tracking-tight'>
					404{' '}
					<Image
						src='https://images.emojiterra.com/google/android-12l/512px/1f985.png'
						width={96}
						height={96}
						alt='EagleUI'
						unoptimized
						priority
						className='rotate-0 hover:scale-200 hover:rotate-750 hover:translate-x-1 hover:-translate-y-5 duration-2500 ease-in-out inline-block'
					/>
				</h1>
				<p className='text-lg text-neutral-400'>
					Oops! The page you&apos;re looking for doesn&apos;t exist.
					It may have been moved or removed.
				</p>
				<div className='flex justify-center gap-4'>
					<Button
						content='Back'
						icon={Book}
						onClick={() => (window.location.href = '/docs')}
					/>
				</div>
			</div>
		</main>
	);
}
