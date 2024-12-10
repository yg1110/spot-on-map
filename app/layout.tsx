import './global.css';

import type { Metadata, Viewport } from 'next';
import Pretendard from 'next/font/local';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '테마 스팟 지도',
  description: 'spot on the map',
};

const pretendard = Pretendard({
  src: [
    {
      path: '../public/fonts/PretendardStd-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PretendardStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/PretendardStd-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
      </head>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
