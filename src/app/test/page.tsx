import { getLinks } from '@/utils/links_utils/link_functions';
import React, { Suspense } from 'react';
import Test from './Test';
import Spinner from './spinner';

type Props = {};

const Page = async (props: Props) => {
  return (
    <div>
      <p>there should be no suspense on this part of the component</p>
      <Suspense fallback={<Spinner />}>
        <Test />
      </Suspense>
    </div>
  );
};

export default Page;
