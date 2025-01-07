'use client';

import { type ChangeEvent, useState } from 'react';

import { Search } from '@/ui/search';

import { usePostsQueryParams } from '@/hooks/params-hooks/usePostsQueryParams';

export const PostSearch = () => {
  const { getParam, setParam } = usePostsQueryParams();
  const [searchValue, setSearchValue] = useState(getParam('search') || '');

  const onSearch = () => setParam('search', searchValue || null);

  const onClear = () => {
    setSearchValue('');
    setParam('search', null);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  return (
    <Search
      value={searchValue}
      onChange={onChange}
      onSearch={onSearch}
      onClear={onClear}
    />
  );
};
