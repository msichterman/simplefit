import AppLayout from "@/layouts/AppLayout";

export default function Collections() {
  return (
    <AppLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
            Collections
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="h-96 rounded-lg border-4 border-dashed border-neutral-200" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
