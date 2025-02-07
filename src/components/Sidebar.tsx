'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, Minus } from 'lucide-react';

interface DocItem {
	title?: string;
	href?: string;
	items?: DocItem[];
}

const docsConfig: DocItem[] = [
	{
		title: 'Getting Started',
		items: [
			{
				title: 'Installation',
				href: '/docs/getting-started/',
			},
			{ title: 'Quick Start', href: '/docs/quick-start' },
		],
	},
	{
		title: 'Components',
		items: [
			{ title: 'Button', href: '/docs/components/button' },
			{ title: 'Card', href: '/docs/components/card' },
		],
	},
];

const SidebarItem = ({
	item,
	depth = 0,
}: {
	item: DocItem;
	depth?: number;
}) => {
	const pathname = usePathname();
	const isActive = pathname === item.href;
	const isCategory = item.items && item.items.length > 0;

	if (isCategory) {
		return (
			<div className='mt-3'>
				<div className='px-3 py-1.5 text-sm font-semibold text-neutral-500 dark:text-neutral-400'>
					{item.title}
				</div>
				<div className='mt-1'>
					{item.items?.map((subItem) => (
						<SidebarItem
							key={subItem.href}
							item={subItem}
							depth={depth + 1}
						/>
					))}
				</div>
			</div>
		);
	}

	return (
		<Link
			href={item.href || '#'}
			className={`
        flex items-center tracking-tight hover:tracking-wide px-3 py-1.5 text-sm transition-all
        hover:bg-neutral-100 hover:font-semibold dark:hover:bg-neutral-900
        ${isActive ? 'text-neutral-900 dark:text-neutral-100 font-medium bg-neutral-100 dark:bg-neutral-900' : 'text-neutral-600 dark:text-neutral-400'}
        ${depth > 0 ? 'ml-4' : ''}
      `}
		>
			{depth === 0 ? (
				<Book size={16} className='mr-2' />
			) : (
				<Minus size={12} className='mr-2' />
			)}
			<span className='flex-1'>{item.title}</span>
		</Link>
	);
};

export const DocsSidebar = () => {
	return (
		<aside className='w-64 border-r border-neutral-200 dark:border-neutral-900 h-screen sticky top-0 overflow-y-auto py-6 flex-shrink-0'>
			<nav className='space-y-1'>
				{docsConfig.map((item) => (
					<SidebarItem key={item.title} item={item} />
				))}
			</nav>
		</aside>
	);
};
