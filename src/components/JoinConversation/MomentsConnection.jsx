import { motion } from "framer-motion";

export default function MomentsConnection() {
  const images = [
    {
      src: "https://cdn.stackoverflow.co/images/jo7n4k8s/production/30f2ec87bc03ae4cb3e231f6d51f6bf588fd14da-1920x1080.jpg?rect=0,36,1920,1008&w=1200&h=630&auto=format&dpr=2",
      alt: "Shared Service Projects",
      title: "Shared Service Projects",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVNVXFv42YdFJnDVaq1NR8esEvaUfV4WxscfTl73gfG4PrUvhskhj9VpWb4fkU1CtRhs&usqp=CAU",
      alt: "Community Celebrations",
      title: "Community Celebrations",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJKj5GWWemJDgQI8FggJVEvXYCeyezETVFd6t8DbPdJcCac0GPFIZBgGqGOVZLaIZocU&usqp=CAU ",
      alt: "Volunteer Gatherings",
      title: "Volunteer Gatherings",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJKj5GWWemJDgQI8FggJVEvXYCeyezETVFd6t8DbPdJcCac0GPFIZBgGqGOVZLaIZocU&usqp=CAU ",
      alt: "Volunteer Gatherings",
      title: "Volunteer Gatherings",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJKj5GWWemJDgQI8FggJVEvXYCeyezETVFd6t8DbPdJcCac0GPFIZBgGqGOVZLaIZocU&usqp=CAU ",
      alt: "Volunteer Gatherings",
      title: "Deloper Gatherings", 
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIG32Y_629Q_YhIrkrWf8iMjGWCDZZQ4xeA&s",
      alt: "Volunteer Gatherings",
      title: 'here Information will be added',
    },
    
  ];

  return (
    <section className="bg-black text-white py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Moments of Connection We've Made So Far...
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-gray-400">
        Explore the impactful connections we've fostered so far, bringing
        together diverse communities through shared experiences, collaboration,
        and innovation.
      </p>
      <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">
        View All Moments →
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="object-cover w-full h-80"
            />
            <p>{image.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
