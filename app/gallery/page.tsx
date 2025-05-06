"use client";

import { Container } from "@/components/container";
import { TopBar } from "@/components/top-bar";
import { motion } from "framer-motion";
import Image from "next/image";

const media = [
  { type: "image", src: "/ramen.jpg", alt: "Ramen" },
  { type: "image", src: "/calibarnpose.jpg", alt: "Gundam Calibarn" },
  { type: "image", src: "/keeb.jpg", alt: "Keyboard" },
  { type: "image", src: "/instantpho.jpg", alt: "Instant Pho" },
  { type: "image", src: "/duck.jpg", alt: "Duck Pasta" },
  { type: "image", src: "/mapotofu.jpg", alt: "Mapo Tofu" },
  { type: "image", src: "/crumble.jpg", alt: "Crumble" },
  { type: "image", src: "/macncheese.jpg", alt: "Mac-n-Cheese" },
  { type: "video", src: "/Aerial.mp4", alt: "Gundam Aerial" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Gallery() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <TopBar />
      <Container
        id="gallery"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="contents"
        >
          {media.map((item, i) => (
            <motion.div key={i} variants={imageVariants}>
              {item.type === "video" ? (
                <video
                  src={item.src}
                  loop
                  autoPlay
                  playsInline
                  className="rounded-lg shadow-md w-full h-auto"
                />  
              ) : (
                <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
                />
              )}            
              <p className="text-center text-muted-foreground mt-2">{item.alt}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
