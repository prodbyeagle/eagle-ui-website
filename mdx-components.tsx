// mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/cn';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		h1: ({ className, ...props }) => (
			<h1
				className={cn(
					'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
					className
				)}
				{...props}
			/>
		),
		h2: ({ className, ...props }) => (
			<h2
				className={cn(
					'mt-10 scroll-m-20 border-b border-b-neutral-200 pb-1 text-3xl font-semibold tracking-tight first:mt-0 dark:border-b-neutral-900',
					className
				)}
				{...props}
			/>
		),
		h3: ({ className, ...props }) => (
			<h3
				className={cn(
					'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
					className
				)}
				{...props}
			/>
		),
		p: ({ className, ...props }) => (
			<p
				className={cn(
					'leading-7 [&:not(:first-child)]:mt-6',
					className
				)}
				{...props}
			/>
		),
		a: ({ className, ...props }) => (
			<Link
				className={cn(
					'font-medium underline underline-offset-4 text-neutral-900 hover:text-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-200',
					className
				)}
				{...props}
			/>
		),
		ul: ({ className, ...props }) => (
			<ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
		),
		ol: ({ className, ...props }) => (
			<ol
				className={cn('my-6 ml-6 list-decimal', className)}
				{...props}
			/>
		),
		li: ({ className, ...props }) => (
			<li className={cn('mt-2', className)} {...props} />
		),
		blockquote: ({ className, ...props }) => (
			<blockquote
				className={cn(
					'mt-6 border-l-2 border-neutral-300 pl-6 italic text-neutral-900 dark:border-neutral-600 dark:text-neutral-200',
					className
				)}
				{...props}
			/>
		),
		code: ({ className, ...props }) => (
			<code
				className={cn(
					'relative rounded bg-neutral-100 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:bg-neutral-900',
					className
				)}
				{...props}
			/>
		),
		table: ({ className, ...props }) => (
			<div className='my-6 w-full overflow-y-auto'>
				<table className={cn('w-full', className)} {...props} />
			</div>
		),
		tr: ({ className, ...props }) => (
			<tr
				className={cn(
					'm-0 border-t border-neutral-300 p-0 dark:border-neutral-700',
					className
				)}
				{...props}
			/>
		),
		th: ({ className, ...props }) => (
			<th
				className={cn(
					'border border-neutral-200 px-4 py-2 text-left font-bold dark:border-neutral-700',
					className
				)}
				{...props}
			/>
		),
		td: ({ className, ...props }) => (
			<td
				className={cn(
					'border border-neutral-200 px-4 py-2 text-left dark:border-neutral-700',
					className
				)}
				{...props}
			/>
		),
	};
}
