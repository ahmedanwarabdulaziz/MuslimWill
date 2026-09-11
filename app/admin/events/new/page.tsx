import { EventForm } from '@/components/admin/EventForm';

export default function NewEventPage() {
  return (
    <div>
      <h1>New Event</h1>
      <p>Media can be attached once the event is created.</p>
      <EventForm mode="create" />
    </div>
  );
}
