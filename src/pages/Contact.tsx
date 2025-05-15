
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have a question or ready to start your project? Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your email address" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        placeholder="What's this about?" 
                        required 
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Your message" 
                        className="min-h-32" 
                        required 
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Our Office</h3>
                <address className="not-italic text-muted-foreground">
                  123 React Lane<br />
                  Web City, JS 54321<br />
                  United States
                </address>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: hello@ranuclepwa.com</p>
                  <p>Phone: (123) 456-7890</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border h-64 mt-6">
                <div className="h-full w-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Map would go here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Common questions about our services and process.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "What is a Progressive Web App?",
                answer: "A Progressive Web App (PWA) is a type of application built with web technologies but offers an experience similar to native apps. PWAs are installable, work offline, and are fast and reliable regardless of network conditions."
              },
              {
                question: "How long does it take to build a PWA?",
                answer: "The timeline varies depending on the complexity of your project. A simple PWA can take 4-6 weeks, while more complex applications might take 2-3 months or more. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do PWAs work on all devices?",
                answer: "Yes, PWAs work on all modern browsers and devices, including desktops, tablets, and mobile phones. They adapt to different screen sizes and provide a consistent experience across platforms."
              },
              {
                question: "How much does it cost to develop a PWA?",
                answer: "The cost depends on the features, complexity, and scope of your project. We offer tailored quotes after understanding your specific requirements. Contact us for a free consultation and estimate."
              }
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg bg-background p-6">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
