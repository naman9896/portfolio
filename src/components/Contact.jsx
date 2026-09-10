import React from "react";
import { MailIcon, LinkIcon, CodeIcon } from "lucide-react";
import { MovingBorder } from "./ui/moving-border";
import { ContactCard } from "./ui/contact-card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const contactInfo = [
  { icon: MailIcon, label: "Email", value: "namanmattu4450@gmail.com" },
  {
    icon: LinkIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/naman-0308321a9",
  },
  { icon: CodeIcon, label: "GitHub", value: "github.com/naman9896" },
];

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-24"
    >
      <div className="max-w-[1000px] w-full pb-8">
        <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 text-foreground">
          Contact
        </h2>
      </div>

      {/* Animated moving-border frame — same travelling glow as the site's buttons */}
      <div className="relative w-full max-w-[1000px] overflow-hidden bg-transparent p-[3px]">
        <div className="absolute inset-0">
          <MovingBorder duration={5000} rx="0%" ry="0%">
            <div className="h-40 w-40 bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)] opacity-80" />
          </MovingBorder>
        </div>

        <div className="relative">
          <ContactCard
            title="Get in touch"
            description="Have a project in mind or just want to say hi? Send a message and I'll get back to you within 1 business day."
            contactInfo={contactInfo}
          >
            <form
              action="https://getform.io/f/e1b7af9e-7af0-4f2b-a99c-fb430a600573"
              method="POST"
              className="w-full space-y-4"
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={6} required />
              </div>
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;
