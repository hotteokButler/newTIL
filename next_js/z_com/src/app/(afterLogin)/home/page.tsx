'use client';

import Post from '../_components/Post';
import PostForm from './_components/PostForm';
import Tab from './_components/Tab';
import TabProvider from './_components/Tab/tabProvider';
import style from './home.module.css';

const Page = () => {
	return (
		<div className={style.home_wrap}>
			<TabProvider>
				<Tab />
				<PostForm />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</TabProvider>
		</div>
	);
};

export default Page;
