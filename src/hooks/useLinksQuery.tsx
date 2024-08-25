import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLinks } from '@/utils/links_utils/link_functions';
import { setLinks } from '@/app/store/linkSlice/linkSlice';

export const useLinksQuery = (userId: string) => {
  const dispatch = useDispatch();

  const query = useQuery({
    queryKey: ["fetchLinks", userId],
    queryFn: () => getLinks(userId),
    enabled: !!userId,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(setLinks(query.data));
    }
  }, [query.data, dispatch]);

  return query;
};
