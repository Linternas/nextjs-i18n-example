import {useLocale, useTranslations} from 'next-intl';
import LocalSwitchSelect from './LocalSwitchSelect';
import {locales} from '@/config';

export default function LocaleSwitch() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocalSwitchSelect defaultValue={locale}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocalSwitchSelect>
  );
}
