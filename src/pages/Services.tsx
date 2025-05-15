
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "PWA Development",
      description: "We build Progressive Web Apps that work across all platforms and devices.",
      features: [
        "Offline functionality",
        "Fast loading speeds",
        "Home screen installation",
        "Push notifications",
        "Native-like experience"
      ]
    },
    {
      title: "React Development",
      description: "Custom React applications tailored to your business needs.",
      features: [
        "Component-based architecture",
        "State management solutions",
        "Performance optimization",
        "API integration",
        "Responsive UI design"
      ]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that delivers exceptional experiences.",
      features: [
        "User research",
        "Wireframing and prototyping",
        "Visual design",
        "Usability testing",
        "Design systems"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Make your web apps faster and more efficient.",
      features: [
        "Core Web Vitals analysis",
        "Lazy loading implementation",
        "Code splitting",
        "Asset optimization",
        "Caching strategies"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support to keep your applications running smoothly.",
      features: [
        "Regular updates",
        "Bug fixes",
        "Security patches",
        "Feature enhancements",
        "Performance monitoring"
      ]
    },
    {
      title: "Consulting",
      description: "Expert advice on your web application strategy.",
      features: [
        "Technology stack recommendations",
        "Architecture planning",
        "PWA implementation strategy",
        "Performance audits",
        "Training and workshops"
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive solutions for building modern web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 mr-2 text-primary" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5 9-9"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Process</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                How we approach each project to deliver exceptional results.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your goals, requirements, and challenges."
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed roadmap for your project, including timelines and milestones."
              },
              {
                step: "03",
                title: "Development",
                description: "Our team builds your application using modern technologies and best practices."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We deploy your application and provide ongoing maintenance and updates."
              }
            ].map((phase, index) => (
              <div key={index} className="relative flex flex-col items-center text-center p-6 border rounded-lg bg-background">
                <div className="absolute -top-4 bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mt-4">{phase.title}</h3>
                <p className="text-muted-foreground mt-2">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Contact us today to discuss your project requirements.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
