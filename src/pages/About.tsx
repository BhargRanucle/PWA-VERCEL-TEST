
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We're a team of passionate developers dedicated to creating exceptional progressive web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border">
                <div className="text-center space-y-2">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Company image would go here</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2023, our company was born out of a passion for creating web applications that feel native on any device. We recognized the potential of Progressive Web Apps early on and focused our expertise on mastering React-based PWA development.
              </p>
              <p className="text-muted-foreground">
                We believe that the web should be fast, reliable, and engaging - just like native applications. Our mission is to help businesses leverage the power of PWAs to reach more users and provide better experiences across all platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The principles that guide our work and company culture.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description: "We're constantly exploring new technologies and approaches to deliver the best solutions."
              },
              {
                title: "Quality",
                description: "We believe in crafting high-quality code that's maintainable and performs well."
              },
              {
                title: "User-Centered",
                description: "We put users first, designing experiences that are intuitive and accessible."
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients, treating their goals as our own."
              },
              {
                title: "Transparency",
                description: "We maintain open communication throughout the development process."
              },
              {
                title: "Continuous Learning",
                description: "We're committed to growing our skills and keeping up with industry advancements."
              },
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The talented people behind our exceptional work.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Alex Johnson", role: "Founder & Lead Developer" },
              { name: "Sam Roberts", role: "UI/UX Designer" },
              { name: "Jordan Lee", role: "Frontend Developer" },
              { name: "Morgan Smith", role: "Project Manager" },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="h-40 w-40 rounded-full bg-muted" />
                <div className="space-y-1 text-center">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
