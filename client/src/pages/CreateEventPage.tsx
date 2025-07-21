// src/pages/CreateEventPage.tsx
import React from 'react';
import CreateEventForm from '../components/CreateEventForm';

const CreateEventPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Create a New Event</h1>
        <CreateEventForm />
      </div>
    </div>
  );
};

export default CreateEventPage;