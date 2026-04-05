import { Suspense } from "react";
import DetailKegiatanClient from "./DetailKegiatanClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailKegiatanClient />
    </Suspense>
  );
}
