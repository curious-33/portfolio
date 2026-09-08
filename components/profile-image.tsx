import { USER } from '@/lib/config/user';
import Image from 'next/image';

export const SelfImage = () => (
	<Image
		src={USER.image.profile}
		width={64}
		height={64}
		priority={true}
		className='rounded-full bg-white'
		alt={`A photo of ${USER.nickname}`}
	/>
)

export const ProfileImage = () => {
  return (
		<div className='relative mx-[2px] my-[3px] size-25'>
			<Image
				src={USER.image.profile}
				fill
				sizes='100px'
				priority
				className='h-full w-full select-none rounded-full bg-secondary object-cover ring-1 ring-border ring-offset-2 ring-offset-primary'
				alt={`Profile of ${USER.nickname}`}
			/>
		</div>
	)
};
