import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import React from 'react';

export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <React.Fragment>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </React.Fragment>
  );
}
