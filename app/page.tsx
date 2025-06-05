'use client';

import Badge from '../components/Badge';
import Button from '../components/Button';
import TaskCard from '../components/TaskCard';
import Toast from '../components/Toast';

export default function Showcase() {
  return (
    <main className="mx-auto max-w-3xl space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-blue-600">
          Design System Showcase
        </h1>
        <p className="text-gray-600">
          Interactive examples of our UI components
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Buttons</h2>
        <div className="flex flex-wrap gap-4 bg-blue-50 p-4 rounded-lg">
          <Button variant="primary" onClick={() => {}}>
            Primary
          </Button>
          <Button variant="primary" disabled onClick={() => {}}>
            Disabled
          </Button>
          <Button variant="danger" onClick={() => {}}>
            Danger
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Badges</h2>
        <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
          <Badge text="Info" variant="info" />
          <Badge text="Success" variant="success" />
          <Badge text="Error" variant="error" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Toast</h2>
        <div className="space-y-2 bg-blue-50 p-4 rounded-lg">
          <Toast message="Saved successfully" variant="success" />
          <Toast message="Something went wrong" variant="error" />
          <Toast message="Here is some info" variant="info" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Task Card</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <TaskCard
            title="Buy Milk"
            description="Remember to buy milk"
            location="Store"
          />
        </div>
      </section>
    </main>
  );
}
