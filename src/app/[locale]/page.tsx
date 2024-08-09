'use client';

import {useTranslations} from 'next-intl';
import LocaleSwitch from '@/components/LocaleSwitch';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <h4>{t('content')}</h4>

      {/* Link를 통해 locale을 변경할 경우 */}
      {/* <Link href="/" locale="ko">
        link
      </Link> */}

      <LocaleSwitch />
    </div>
  );
}
