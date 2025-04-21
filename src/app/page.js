import { Suspense } from 'react';
import DashboardContent from './DashboardContent'; 

export default function Page() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
