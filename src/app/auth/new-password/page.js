"use client"
import { Suspense } from 'react';
import NewPassword from './NewPassword';
import { useSearchParams } from 'next/navigation';

function Wrapper() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return <NewPassword token={token} />;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Wrapper />
    </Suspense>
  );
}
