import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "@/assets/urlCofig";

export default function CreateEventForm() {
  const [formData, setFormData] = useState({
    title: "",
    format: "",
    startDateTime: "",
    endDateTime: "",
    timezone: "",
    location: "",
    eventType: "",
    capacity: "",
    description: "",
    visibility: "",
    eventImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, eventImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (key === "eventImage" && value) {
        formDataToSend.append(key, value);
      } else {
        formDataToSend.append(key, value);
      }
    }

    try {
      const response = await axios.post("/api/create", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        toast.success("Event created successfully!");
        setFormData({
          title: "",
          format: "",
          startDateTime: "",
          endDateTime: "",
          timezone: "",
          location: "",
          eventType: "",
          capacity: "",
          description: "",
          visibility: "",
          eventImage: null,
        });
      }
    } catch (error) {
      toast.error("Failed to create event. Please try again!");
      console.error("Error creating event:", error);
    }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-900 shadow-lg rounded-xl mt-[-8rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <form
        className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-900 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700"
        onSubmit={handleSubmit}
      >
        <div>
          <Label htmlFor="title">Event Title*</Label>
          <Input
            name="title"
            placeholder="Enter event name"
            required
            className="mt-1"
            onChange={handleChange}
            value={formData.title}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="format">Event Format*</Label>
            <select
              name="format"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
              onChange={handleChange}
              value={formData.format}
            >
              <option value="">Select format</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <div>
            <Label htmlFor="eventType">Event Type*</Label>
            <select
              name="eventType"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
              onChange={handleChange}
              value={formData.eventType}
            >
              <option value="">Select type</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Start Date & Time*</Label>
            <Input
              type="datetime-local"
              name="startDateTime"
              required
              className="mt-1"
              onChange={handleChange}
              value={formData.startDateTime}
            />
          </div>
          <div>
            <Label>End Date & Time*</Label>
            <Input
              type="datetime-local"
              name="endDateTime"
              required
              className="mt-1"
              onChange={handleChange}
              value={formData.endDateTime}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Timezone*</Label>
            <Input
              name="timezone"
              placeholder="Enter timezone (e.g., UTC, IST)"
              required
              className="mt-1"
              onChange={handleChange}
              value={formData.timezone}
            />
          </div>
          <div>
            <Label>Location*</Label>
            <Input
              name="location"
              placeholder="Enter location"
              required
              className="mt-1"
              onChange={handleChange}
              value={formData.location}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Capacity (Optional)</Label>
            <Input
              type="number"
              name="capacity"
              placeholder="Enter capacity"
              className="mt-1"
              onChange={handleChange}
              value={formData.capacity}
            />
          </div>

          <div>
            <Label htmlFor="visibility">Visibility*</Label>
            <select
              name="visibility"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
              onChange={handleChange}
              value={formData.visibility}
            >
              <option value="">Select visibility</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
        </div>

        <div>
          <Label>Description*</Label>
          <Textarea
            name="description"
            placeholder="Describe your event..."
            required
            className="mt-1"
            onChange={handleChange}
            value={formData.description}
          />
        </div>

        <div>
          <Label>Event Image*</Label>
          <Input
            type="file"
            accept="image/*"
            required
            className="mt-1"
            onChange={handleFileChange}
          />
        </div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition-all mt-5"
          >
            Create Event
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
