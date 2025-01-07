import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Toaster } from 'sonner';

import type { LayoutProps } from '@/types/utils/layout-props.type';

import { QueryProvider } from '@/providers/query.provider';
import { ThemeProvider } from '@/providers/theme.provider';

import '@/styles/globals.scss';

const font = Noto_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Visions',
  description: 'Пориньте у світ фотографій та відкривайте нові горизонти',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="text-sm lg:text-base max-w-full min-h-screen flex flex-col min-w-80">
              {children}
            </div>
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
