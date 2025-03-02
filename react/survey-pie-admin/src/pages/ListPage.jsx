import { Table } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSwr from 'swr';

import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';

const PAGE_SIZE = 20;

const columns = [
  {
    title: '번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '생성일',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (_, { createdAt }) => {
      const time = new Date(createdAt);
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    },
  },
  {
    title: '액션',
    dataIndex: 'id',
    key: 'action',
    render: (_, { id }) => {
      return (
        <button type="button" onClick={() => console.log(id, '삭제')}>
          삭제
        </button>
      );
    },
  },
];

const ListPage = () => {
  /* 처음 요청 보낸 후 data가 떨어지는 기간동안에는 undefined 상태이며 data를 받게되면 다시 렌더링이 되며,
   두번 렌더링이 됨 useSWR을 사용하면 이렇게 되더라도 주소나 값이 바뀌지 않는 이상 api는 최초 한번만 불러옴 */
  const { data, error } = useSwr('/surveys', fetcher);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  if (error) {
    return 'error';
  }

  if (!data) return '...loading';

  return (
    <MainLayout selectedKeys={['list']}>
      <Table
        onRow={({ id }) => {
          return {
            onClick: () => {
              navigate(`/builder/${id}`);
            },
          };
        }}
        columns={columns}
        pagination={{
          position: ['bottomCenter'],
          total: data.length,
          current: page,
          pageSize: PAGE_SIZE,
        }}
        onChange={(pagination) => {
          setPage(pagination.current);
        }}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
      />
    </MainLayout>
  );
};

export default ListPage;
