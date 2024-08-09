'use client';

import {ChangeEvent, ReactNode, useTransition} from 'react';
import {Locale} from '@/config';
import {useRouter, usePathname} from '@/navigation';

type Props = {
  children: ReactNode;
  defaultValue: string;
};

export default function LocaleSwitchSelect({children, defaultValue}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace({pathname}, {locale: nextLocale});
    });
  }

  return (
    <label>
      {/* <p className="sr-only">{label}</p> */}
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
