'use client';

// components
import AuthClassicLayout from 'src/layouts/auth/classic';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthClassicLayout title="Amin Diagnostics & Medical Services Admin Portal">
      {children}
    </AuthClassicLayout>
  );
}
