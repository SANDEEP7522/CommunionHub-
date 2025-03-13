import React, { useEffect, useState } from "react";
import axios from "@/assets/urlCofig";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Search } from "lucide-react";

const EventShow = () => {
  const [eventList, setEventList] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventTypeFilter, setEventTypeFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      console.log("Full Response:", response.data);

      const events = response.data?.data || [];
      console.log("Events:", events);

      setEventList(events);
      setFilteredEvents(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = eventList;

    if (searchTerm) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (eventTypeFilter !== "All") {
      filtered = filtered.filter(
        (event) => event.eventType === eventTypeFilter
      );
    }

    setFilteredEvents(filtered);
  }, [searchTerm, eventTypeFilter, eventList]);

  return (
    <motion.div
      className="container mx-auto py-8 mt-[5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold text-center mb-6">✨ ALL Events</h2>
      <motion.div
        className="flex justify-center gap-4 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search event..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 pl-10 pr-4 py-2 rounded-md w-80 focus:ring-2 focus:ring-blue-500 focus:outline-none hover:bg-slate-100"
          />
        </div>

        <select
          value={eventTypeFilter}
          onChange={(e) => setEventTypeFilter(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md"
        >
          <option value="All">All Events</option>
          <option value="Free">Free Events</option>
          <option value="Paid">Paid Events</option>
        </select>
      </motion.div>

      {loading && (
        <motion.div
          className="flex justify-center items-center h-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </motion.div>
      )}

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <motion.div
              key={event._id}
              className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.img
                src={event.eventImage}
                alt={event.title}
                className="w-full h-40 object-cover"
                whileHover={{ scale: 1.05 }}
              />
              <div className="p-4">
                <span className="block text-sm text-gray-500 mb-1">
                  {`${new Date(
                    event.startDateTime
                  ).toLocaleDateString()} - ${new Date(
                    event.endDateTime
                  ).toLocaleDateString()}`}
                </span>

                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {event.description}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    event.eventType === "Free"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {event.eventType}
                </span>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    📍 {event.location}
                  </span>
                  <motion.button
                    className="bg-black text-white px-3 py-1 rounded text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    Details →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No events available.
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EventShow;
