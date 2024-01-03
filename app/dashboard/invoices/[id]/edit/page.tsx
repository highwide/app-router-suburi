import { customers } from '@/app/lib/placeholder-data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/create-form';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: `/dashboard/invoices/${id}/create`,
            active: true,
          },
        ]}
      />
      <Form invoices={invoice} customers={customers} />
    </main>
  );
}
