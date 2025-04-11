
import { Suspense } from 'react';
import NewPassword from './NewPassword';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading password reset...</div>}>
      <NewPassword />
    </Suspense>
  );
}