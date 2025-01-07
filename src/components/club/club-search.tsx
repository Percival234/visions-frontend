'use client';

import { type ChangeEvent, useState } from 'react';

import { Search } from '@/ui/search';

import { useClubsQueryParams } from '@/hooks/params-hooks/useClubsQueryParams';

export const ClubSearch = () => {
  const { getParam, setParam } = useClubsQueryParams();
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
