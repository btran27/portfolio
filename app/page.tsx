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
            <h3>Kiewit Garage</h3>
            <p>Short Description of the Kiewit Garage project</p>
            <Image
              src="/cu_fsm_diagram.png"
              alt="Diagram of CU FSM"
              width={500}
              height={300}
            />
          </div>
          <div>
            <h3>Other Project</h3>
            <p>Short Description of the other project</p>
            <Image
              src="/cu_fsm_diagram.png"
              alt="Diagram of CU FSM"
              width={500}
              height={300}
            />
          </div>
        </Container>
        <Container id="about_me">
          <h2>About Me</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Here is a little description about me. Fill in some more details
            here to make the site copy your own. Replace this paragraph with a
            paragraph about yourself You have a lot of things that you like to
            do, so maybe put them into a list.
          </p>
          <h3 className="mt-6">Things I Like to Do</h3>
          <div className="grid grid-cols-2 gap-4 divide-x-2">
            <ul className="list-disc pl-5 mt-4">
              <li>Reading science fiction novels</li>
              <li>Exploring new hiking trails</li>
              <li>Practicing photography</li>
              <li>Learning to play the guitar</li>
              <li>Experimenting with cooking recipes</li>
            </ul>
            <p>(Image of one of my favorite hobbies)</p>
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
