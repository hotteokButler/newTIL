import dommyImg from '@/asset/image/dommy_img.png';
import dommyUser from '@/asset/image/dommy_user.jpg';

export const me = {
	image: dommyUser,
	id: 'hotteok',
	nickname: '호떡집사',
};
export const anonymous = {
	image: dommyUser,
	id: 'anonymous',
	nickname: '유저A',
};

export const target = {
	User: {
		image: dommyUser,
		id: 'anonymous',
		nickname: '유저A',
	},
	content: '클론코딩',
	createdAt: new Date(),
	Images: [
		{
			id: new Date(),
			link: dommyImg,
			alt: 'dommy',
		},
	],
};
