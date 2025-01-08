import type { Metadata } from 'next';

import { WEBSITE_NAME } from '@/constants/website-name.constant';

export const metadata: Metadata = {
  title: WEBSITE_NAME,
};

export default function Page() {
  return <div></div>;
}
