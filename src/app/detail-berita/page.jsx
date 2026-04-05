import { Suspense } from "react";

import DetailBeritaClient from "./DetailBeritaClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailBeritaClient />
    </Suspense>
  );
}
