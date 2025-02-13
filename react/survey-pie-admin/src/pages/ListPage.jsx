import useSwr from 'swr';

import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';

const ListPage = () => {
  /* 처음 요청 보낸 후 data가 떨어지는 기간동안에는 undefined 상태이며 data를 받게되면 다시 렌더링이 되며,
   두번 렌더링이 됨 useSWR을 사용하면 이렇게 되더라도 주소나 값이 바뀌지 않는 이상 api는 최초 한번만 불러옴 */
  const { data, error } = useSwr('/surveys', fetcher);

  console.log(data);

  if (error) {
    return 'error';
  }

  return <MainLayout selectedKeys={['list']}>ListPage</MainLayout>;
};

export default ListPage;
