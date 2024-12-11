import { PropsWithChildren } from 'react';

export default function SpotsLayout({ children }: PropsWithChildren) {
  return <main className="h-screen w-screen">{children}</main>;
}
