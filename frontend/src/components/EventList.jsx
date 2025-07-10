import { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("/api/v1/events/admin", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvents(res.data.events || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Posted Events</h2>
      {events.length === 0 ? (
        <p>No events created yet.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
            <li
            key={event._id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition duration-300"
            >
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-md mb-3"
            />
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-blue-700">{event.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                {event.registrations?.length || 0} Registrations
                </span>
            </div>
            <p className="text-gray-700 mb-2">{event.description}</p>
            {event.location && (
                <p className="text-sm text-gray-500">📍 {event.location}</p>
            )}
            {event.date && (
                <p className="text-sm text-gray-500">
                🗓️ {new Date(event.date).toLocaleDateString()}
                </p>
            )}
            </li>
        ))}
        </ul>

      )}
    </div>
  );
};

export default EventList;
