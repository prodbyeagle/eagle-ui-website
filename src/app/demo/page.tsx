'use client';
import { useState } from 'react';
import {
	Avatar,
	Button,
	Gradient,
	Input,
	Select,
	Dialog,
	Card,
	Spinner,
	Badge,
	ButtonGroup,
	Slider,
	Textarea
} from '@prodbyeagle/eagle-ui';
import {
	FormInput,
	Layout,
	Paintbrush,
	Rainbow,
	ToggleLeft,
	MessageSquare,
	MessageCircleWarning,
	Sandwich,
	Brain,
	Home,
	Settings,
	User,
	Shield,
} from 'lucide-react';
import Image from 'next/image';

type ComponentCategoryProps = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	children: React.ReactNode;
};

const ComponentCategory = ({
	title,
	icon: Icon,
	children,
}: ComponentCategoryProps) => (
	<Card>
		<div className='flex items-center gap-2 mb-6'>
			<Icon className='w-6 h-6 dark:text-neutral-100 text-neutral-900' />
			<h2 className='text-2xl font-semibold dark:text-neutral-100 text-neutral-900'>
				{title}
			</h2>
		</div>
		{children}
	</Card>
);

const DemoPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [selected, setSelected] = useState('option1');
	const [sliderValue, setSliderValue] = useState(5);
	const [sliderValue1, setSliderValue1] = useState(2);
	const [sliderValue2, setSliderValue2] = useState(4);
	const [sliderValue3, setSliderValue3] = useState(6);
	const [sliderValue4, setSliderValue4] = useState(10);
	const [sliderValue5, setSliderValue5] = useState(25);

	const openDialog = () => setIsOpen(true);
	const closeDialog = () => setIsOpen(false);
	const openAlert = () => setIsAlertOpen(true);
	const closeAlert = () => setIsAlertOpen(false);

	interface SelectChangeEvent {
		value: string;
	}

	const handleSelectChange = (value: SelectChangeEvent['value']) => {
		setSelected(value);
		console.info(`Selected: ${value}`);
	};

	return (
		<div className='min-h-screen bg-neutral-100 dark:bg-neutral-950'>
			<main className='max-w-screen-xl mx-auto px-4 py-8'>
				<div className='flex items-center justify-between mb-8'>
					<h1 className='text-3xl tracking-tight font-bold dark:text-neutral-100 text-neutral-900'>
						EagleUI{' '}
						<Image
							src={
								'https://images.emojiterra.com/google/android-12l/512px/1f985.png'
							}
							width={40}
							height={40}
							alt='EagleUI'
							unoptimized
							className='rotate-0 hover:scale-250 hover:rotate-738 hover:-translate-x-3 duration-2300 ease-in-out inline-block'
						></Image>
					</h1>
				</div>

				<h3 className='w-fit text-lg -rotate-5 hover:-translate-y-3 duration-200 cursor-default font-medium mb-3 text-neutral-700 dark:text-neutral-200'>
					Card Component
					<span className='ml-2 text-xl animate-bounce inline-block'>
						↓
					</span>
				</h3>
				<div className='grid grid-cols-1 lg:grid-cols-1 gap-6'>
					<ComponentCategory
						title='Interactive Elements'
						icon={ToggleLeft}
					>
						<div className='space-y-6'>
							<div>
								<h3 className='text-lg font-medium mb-3 text-neutral-700 dark:text-neutral-200'>
									Buttons
								</h3>
								<div className='grid grid-cols-3 gap-3'>
									<Button content='Primary' />
									<Button
										content='Secondary'
										variant='secondary'
									/>
									<Button content='Shiny' variant='shiny' />
									<Button content='Ghost' variant='ghost' />
									<Button content='Border' variant='border' />
									<Button loading />
									<Button
										icon={Sandwich}
										content='Disabled'
										disabled
									/>
									<Button content='Danger' variant='danger' />
									<div className='grid grid-cols-3 gap-3'>
										<Button size='sm' content='Small' />
										<Button size='md' content='Default Size' />
										<Button size='lg' content='Large' />
									</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className='text-lg font-medium mt-6 mb-3 text-neutral-700 dark:text-neutral-200'>
								Dialog
							</h3>
							<div className='grid grid-cols-2 gap-3'>
								<Button
									icon={MessageSquare}
									content='Click to Open Dialog'
									onClick={openDialog}
								/>
								<Button
									icon={MessageCircleWarning}
									content='Click to Open Alert'
									onClick={openAlert}
								/>
							</div>
						</div>
						<div>
							<h3 className='text-lg font-medium my-3 text-neutral-700 dark:text-neutral-200'>
								ButtonGroup
							</h3>
							<div>
								<ButtonGroup
									buttons={[
										{ label: 'Home', icon: Home },
										{
											label: 'Settings',
											icon: Settings,
										},
										{ label: 'Profile', icon: User },
										{ label: 'Admin Panel', icon: User },
										{ label: 'Super Admin Panel', icon: Shield },
									]}
									className='mb-2 w-full'
									activeButton={selected}
									onButtonClick={(button) =>
										setSelected(button)
									}
								/>
							</div>
						</div>
					</ComponentCategory>

					<ComponentCategory title='Form Elements' icon={FormInput}>
						<h3 className='text-lg font-medium mb-3 dark:text-neutral-200'>
							Input
						</h3>
						<div className='space-y-4 mb-6'>
							<Input
								label='Search'
								icon={Rainbow}
								placeholder='Regular input'
							/>
							<Input
								label='Password'
								icon={Sandwich}
								placeholder='Enter Password...'
								error='Wrong Password.'
							/>
							<Input
								disabled
								icon={Brain}
								placeholder='Disabled input'
							/>

							<Textarea
								label='Password'
								placeholder='Demo Textarea'
								rows={3}
							/>

							<Textarea
							disabled
								label='Password (Disabled)'
								placeholder='Disabled Textarea'
								rows={3}
							/>
						</div>

						<div>
							<h3 className='text-lg font-medium mb-3 dark:text-neutral-200'>
								Select
							</h3>
							<Select
								value={selected}
								onChange={handleSelectChange}
								options={Array.from({ length: 10 }, (_, i) => ({
									value: `option${i + 1}`,
									label: `Option ${i + 1}`,
								}))}
							/>
						</div>

						<div>
							<h3 className='text-lg font-medium my-3 dark:text-neutral-200'>
								Slider
							</h3>
							<Slider
								min={0}
								max={10}
								value={sliderValue}
								markers={[0, 2, 5, 7, 10]}
								onChange={setSliderValue}
								variant='standard'
								label='Volume'
								step={1}
							/>

							<Slider
								min={0}
								max={4}
								value={sliderValue1}
								onChange={setSliderValue1}
								label='Progress'
								step={1}
							/>

							<Slider
								min={0}
								max={100}
								value={sliderValue2}
								onChange={setSliderValue2}
								variant='non-uniform'
								markers={[0, 15, 35, 65, 85, 100]}
								label='Custom Steps'
							/>

							<Slider
								min={0}
								max={12}
								value={sliderValue3}
								onChange={setSliderValue3}
								variant='none'
								label='Clean Slider'
								step={1}
							/>

							<Slider
								min={0}
								max={100}
								variant='non-uniform'
								markers={[0, 15, 35, 65, 85, 100]}
								label='Custom Steps'
								value={sliderValue4}
								onChange={setSliderValue4}
								step={5}
							/>

							<Slider
								min={0}
								max={50}
								step={1}
								value={sliderValue5}
								onChange={setSliderValue5}
								disabled
							/>
						</div>

						{/* <div>
							<h3 className='text-lg font-medium my-3 dark:text-neutral-200'>
								Toggle
							</h3>
							<div className='grid grid-cols-5 gap-3'>
								<Toggle
									checked={toggleChecked}
									onChange={setToggleChecked}
									size='sm'
								/>
								<Toggle
									checked={toggleChecked}
									onChange={setToggleChecked}
								/>
								<Toggle
									checked={toggleChecked}
									onChange={setToggleChecked}
									size='lg'
								/>
								<Toggle
									checked={toggleChecked}
									onChange={setToggleChecked}
									disabled
								/>
							</div>
						</div> */}
					</ComponentCategory>

					<ComponentCategory title='Display Elements' icon={Layout}>
						<div className='space-y-6'>
							<div>
								<div>
									<h3 className='text-lg font-medium mb-3 dark:text-neutral-200'>
										Spinner
									</h3>
									<div className='flex items-center gap-4'>
										<Spinner
											color='#ff6961'
											size={32}
											strokeWidth={6}
											speed={1}
										/>
										<Spinner
											color='#ffb347'
											size={32}
											strokeWidth={6}
											speed={2}
										/>
										<Spinner
											color='#fdfd96'
											size={32}
											strokeWidth={6}
											speed={3}
										/>
										<Spinner
											color='#77dd77'
											size={32}
											strokeWidth={6}
											speed={4}
										/>
										<Spinner
											color='#84b6f4'
											size={32}
											strokeWidth={6}
											speed={5}
										/>
										<Spinner
											color='#fdcae1'
											size={32}
											strokeWidth={6}
											speed={6}
										/>
										<Spinner
											color='#cfcfc4'
											size={32}
											strokeWidth={6}
											speed={7}
										/>
										<Spinner
											color='#b19cd9'
											size={32}
											strokeWidth={6}
											speed={8}
										/>
									</div>
								</div>
								<div className='mt-4'>
									<h3 className='text-lg font-medium mb-3 dark:text-neutral-200'>
										Badges
									</h3>
									<div className='grid grid-cols-4 gap-3'>
										<Badge text='Primary' />
										<Badge
											text='Secondary'
											variant='secondary'
										/>
										<Badge text='Border' variant='border' />
										<Badge text='Danger' variant='danger' />
										<Badge
											text='Success'
											variant='success'
										/>
										<Badge icon={Paintbrush} text='Icon' />
										<Badge icon={Paintbrush} />
									</div>
								</div>
								<div className='mt-4'>
									<h3 className='text-lg font-medium mb-3 dark:text-neutral-200'>
										Avatar
									</h3>
									<div className='flex flex-col space-y-6'>
										<h3 className='text-sm font-medium mb-3 dark:text-neutral-200'>
											Different Avatars
										</h3>
										<div className='space-x-3 flex flex-row'>
											<Avatar src='https://cdn.discordapp.com/avatars/893759402832699392/055eeecd03d340a5dc1bfa4bf2362b49' />
											<Avatar src='https://cdn.discordapp.com/avatars/1305737822614847520/54d4c149b6bc7004e73e03919bc6ba95' />
											<Avatar fallbackText='NF' />
										</div>

										<h3 className='text-sm font-medium mb-3 dark:text-neutral-200'>
											Different Sizes
										</h3>
										<div className='space-x-3 flex flex-row'>
											<Avatar
												src='https://cdn.discordapp.com/avatars/893759402832699392/055eeecd03d340a5dc1bfa4bf2362b49'
												size={24}
											/>
											<Avatar
												src='https://cdn.discordapp.com/avatars/893759402832699392/055eeecd03d340a5dc1bfa4bf2362b49'
												size={48}
											/>
											<Avatar
												src='https://cdn.discordapp.com/avatars/893759402832699392/055eeecd03d340a5dc1bfa4bf2362b49'
												size={72}
											/>
										</div>

										<h3 className='text-sm font-medium mb-3 dark:text-neutral-200'>
											Different Shapes
										</h3>
										<div className='space-x-3 flex flex-row'>
											<Avatar
												src='https://cdn.discordapp.com/avatars/893759402832699392/055eeecd03d340a5dc1bfa4bf2362b49'
												shape='circle'
											/>
											<Avatar
												src='https://cdn.discordapp.com/avatars/893759402832699392/055eeecd03d340a5dc1bfa4bf2362b49'
												shape='rounded'
											/>
											<Avatar
												src='https://cdn.discordapp.com/avatars/893759402832699392/055eeecd03d340a5dc1bfa4bf2362b49'
												shape='none'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</ComponentCategory>

					<ComponentCategory
						title='Visual Elements'
						icon={Paintbrush}
					>
						<div className='space-y-6'>
							<div>
								<h3 className='text-lg font-medium mb-3 dark:text-neutral-200'>
									Gradient
								</h3>
								<div className='h-72 overflow-hidden'>
									<Gradient
										width='100%'
										height='100%'
										warpIntensity={0.1}
										colors={[
											'#ca9bee',
											'#8b64a8',
											'#523868',
											'#4f2c74',
											'#ff6f61',
											'#ffcc00',
										]}
										className='w-full h-full rounded-4xl'
									/>
								</div>
							</div>
						</div>
					</ComponentCategory>
				</div>

				<Dialog
					isOpen={isOpen}
					onClose={closeDialog}
					title='Demo Dialog'
				>
					<div className='space-y-6 dark:text-neutral-100 text-neutral-900'>
						<p className='text-lg'>
							This is a demo dialog with a button:
						</p>
						<Button
							content='Click me'
							onClick={closeDialog}
							className='w-full'
						/>
					</div>
				</Dialog>

				<Dialog
					isOpen={isAlertOpen}
					onClose={closeAlert}
					title='Demo Alert'
				>
					<div className='space-y-6 dark:text-neutral-100 text-neutral-900'>
						<p className='text-lg'>
							This is a demo Alert with a button:
						</p>
						<Button
							content='Click me'
							onClick={closeAlert}
							variant='danger'
						/>
					</div>
				</Dialog>
			</main>
		</div>
	);
};

export default DemoPage;
