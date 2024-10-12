import { getLinks } from '@/utils/links_utils/link_functions';
import React from 'react';

type Props = {};

const Test = async (props: Props) => {
  // Fetch data directly in server component
  const data = await getLinks('66bb73470016621da43e');

  return (
    <div>
      {data?.documents.map((link: any, index: number) => (
        <div key={index}>
          {link.platform} : {link.link}
        </div>
      ))}
    </div>
  )
};

export default Test;
