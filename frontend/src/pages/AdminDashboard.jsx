import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-blue-50 text-blue-900">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <EventForm />
      <EventList />
    </div>
  );
};

export default AdminDashboard;
