"use client";

import { Container } from "@/components/container";
import { TopBar } from "@/components/top-bar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be at most 500 characters"),
});

export default function Home() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="h-fit w-dvw">
      <TopBar />
      <div className="w-dvw h-dvh pt-16 grid grid-cols-3">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-8xl">heyo</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>(Picture of me here)</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-8xl">I'm</h1>
            <h1 className="text-8xl">Brian</h1>
          </div>
        </div>
      </div>
      <div className="w-dvw h-fit bg-secondary">
        <Container id="projects" className="flex flex-col gap-6">
          <h2>Projects</h2>
          <div>
            <h3>Project: Cardmatch</h3>
            <p>Project: Cardmatch is a Card Mathing memory game that was developed and implemented in a special fashion. The full system uses a PS5 controller to interact with the Vivado Microblaze, which controls the game logic, 
              to then send specific signals to the Nexys Video FPGA that takes care of producing the video output for the game.
            </p>
            <div className="mt-6">
              <h3>Project Cardmatch Demo</h3>
              <div className="w-full aspect-video mt-4 rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://youtube.com/embed/xWZMS8pMmm4"
                  title="Cardmatch Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <h3>Senior Capstone: Kiewit Garage Studio Manager</h3>
            <p>The Kiewit Garage Studio Manager is UNL College-of-Engineering website that manages the logistics behind the Workshops, Warehouse, and Resources of the Kiewit Hall. Utilizing a Ruby/Sinatra and MySql Framework,
               my team used the Nebraska Innovation Studio Website as a basis to develop Kiewit Garage specific features. Key features include Warehouse Storage, Tool Checkout, Status Page, and Integration of Single-Sign-On  
            </p>
              <Image
                src="/Status.png"
                alt="Garage Manager Status"
                width={700}
                height={500}
                className=" m-4 rounded-md shadow-md"
              />
              <Image
                src="/Checkout.png"
                alt="Garage Manager Checkout"
                width={700}
                height={500}
                className="m-4 rounded-md shadow-md"
              />
          </div>
        </Container>
        <Container id="about_me">
          <h2>About Me</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am a Computer Engineering Student that has a lot of side hobbies that I like to explore. 
          </p>
          <h3 className="mt-6">Interests/Hobbies</h3>
          <div className="grid grid-cols-2 gap-4 divide-x-2">
            <ul className="list-disc pl-5 mt-4">
              <li>Model Kit Building</li>
              <li>Mechanical Keyboard Building</li>
              <li>Music</li>
              <li>Cooking</li>
              <li>Balisong Flipping</li>
              <li>Cardistry</li>
              <li>Reading</li>
              <li>Playing Video Games</li>
              <li>Sleeping</li>
            </ul>
            <Image
              src="/Calibarn.jpg"
              alt="Gundam Calibarn"
              width={300}
              height={400}
            />
          </div>
        </Container>
        <Container id="contact" className="flex flex-col gap-6">
          <h2>Contact Me</h2>
          <Form {...contactForm}>
            <form onSubmit={contactForm.handleSubmit(onSubmit)}>
              <FormField
                name="name"
                control={contactForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={contactForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="message"
                control={contactForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me how you really feel"
                        className="h-50"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4">
                Submit
              </Button>
            </form>
          </Form>
        </Container> 
      </div>
      <div className="bg-background h-12 w-full flex items-center justify-center">
        <div className="h-fit grid grid-cols-2 divide-x-2">
          <Button variant="ghost" onClick={() => handleScrollToTop()}>
            Back to Top
          </Button>
          <Button variant="ghost" onClick={() => alert("❤️")}>
            hehe :)
          </Button>
        </div>
      </div>
    </div>
  );
}
