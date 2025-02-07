// import fs from 'fs';
// import path from 'path';
// import { notFound } from 'next/navigation';
// import { format } from 'date-fns';
// import { ChevronRight, Clock } from 'lucide-react';
// import Link from 'next/link';

// interface DocPageProps {
// 	params: {
// 		slug: string | string[];
// 	};
// }

// async function getDocFromParams(slug: string[]) {
// 	const docsDirectory = path.join(process.cwd(), 'src/app/content/docs');
// 	const filePath = path.join(docsDirectory, `${slug.join('/')}.mdx`);

// 	try {
// 		if (!fs.existsSync(filePath)) return null;

// 		const fileStats = fs.statSync(filePath);
// 		const MDXContent = await import(
// 			`@/app/content/docs/${slug.join('/')}.mdx`
// 		);

// 		return {
// 			content: MDXContent.default,
// 			metadata: {
// 				title: MDXContent.metadata?.title || 'Untitled',
// 				description: MDXContent.metadata?.description || '',
// 				lastModified: fileStats.mtime,
// 			},
// 		};
// 	} catch {
// 		return null;
// 	}
// }

// export async function generateMetadata({ params }: DocPageProps) {
// 	const slug = Array.isArray(params.slug) ? params.slug : [params.slug];
// 	const doc = await getDocFromParams(slug);

// 	if (!doc) {
// 		return {
// 			title: 'Not Found',
// 			description: 'The requested documentation page could not be found.',
// 		};
// 	}

// 	return {
// 		title: `${doc.metadata.title} - Documentation`,
// 		description: doc.metadata.description,
// 	};
// }

// export default async function DocPage({ params }: DocPageProps) {
// 	const slug = Array.isArray(params.slug) ? params.slug : [params.slug];
// 	const doc = await getDocFromParams(slug);

// 	if (!doc) notFound();

// 	const { content: MDXContent, metadata } = doc;

// 	return (
// 		<main className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden'>
// 			<article className='container mx-auto max-w-3xl px-6 py-12 lg:py-20 p-10'>
// 				{/* Breadcrumb */}
// 				<div className='mb-8 flex items-center space-x-1 text-sm text-neutral-500 dark:text-neutral-400'>
// 					<Link
// 						href='/docs'
// 						className='hover:text-neutral-900 dark:hover:text-neutral-100'
// 					>
// 						Docs
// 					</Link>
// 					{slug.map((segment, index) => (
// 						<span key={segment} className='flex items-center'>
// 							<ChevronRight className='mx-1 h-4 w-4 text-neutral-400' />
// 							<Link
// 								href={`/docs/${slug.slice(0, index + 1).join('/')}`}
// 								className='hover:text-neutral-900 dark:hover:text-neutral-100 capitalize'
// 							>
// 								{segment.replace(/-/g, ' ')}
// 							</Link>
// 						</span>
// 					))}
// 				</div>

// 				{/* Documentation Content */}
// 				<div className='space-y-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 shadow-sm'>
// 					{/* Title & Description */}
// 					<header>
// 						<h1 className='text-3xl font-bold text-neutral-900 dark:text-neutral-100'>
// 							{metadata.title}
// 						</h1>
// 						{metadata.description && (
// 							<p className='mt-2 text-lg text-neutral-600 dark:text-neutral-400'>
// 								{metadata.description}
// 							</p>
// 						)}
// 					</header>

// 					{/* Last Modified */}
// 					{metadata.lastModified && (
// 						<div className='flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400'>
// 							<Clock className='h-4 w-4' />
// 							<time
// 								dateTime={metadata.lastModified.toISOString()}
// 							>
// 								Last updated on{' '}
// 								{format(metadata.lastModified, 'MMMM d, yyyy')}
// 							</time>
// 						</div>
// 					)}

// 					{/* MDX Content */}
// 					<div className='break-normal max-w-none leading-relaxed'>
// 						<MDXContent />
// 					</div>
// 				</div>
// 			</article>
// 		</main>
// 	);
// }

