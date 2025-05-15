
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce PWA",
      description: "A progressive web app for a fashion retailer with offline browsing, cart functionality, and fast checkout process.",
      tags: ["React", "PWA", "Tailwind CSS", "API Integration"],
      imageClass: "bg-primary/20"
    },
    {
      title: "Task Management App",
      description: "A productivity app with offline capability, push notifications, and sync across devices when back online.",
      tags: ["React", "PWA", "Redux", "IndexedDB"],
      imageClass: "bg-secondary/20"
    },
    {
      title: "News Aggregator",
      description: "A PWA that caches news articles for offline reading with a clean, responsive interface.",
      tags: ["React", "PWA", "Styled Components", "News API"],
      imageClass: "bg-primary/20"
    },
    {
      title: "Real Estate Listings",
      description: "A property listing PWA with map integration, favorites, and property comparison features.",
      tags: ["React", "PWA", "Mapping API", "Filter System"],
      imageClass: "bg-secondary/20"
    },
    {
      title: "Fitness Tracker",
      description: "A workout tracking PWA with offline workout logging, progress charts, and goal setting.",
      tags: ["React", "PWA", "Charts", "Local Storage"],
      imageClass: "bg-primary/20"
    },
    {
      title: "Recipe Finder",
      description: "A culinary PWA with recipe search, favorites, and offline cookbook functionality.",
      tags: ["React", "PWA", "Search Algorithm", "Responsive Design"],
      imageClass: "bg-secondary/20"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore some of the progressive web applications we've built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`aspect-video ${project.imageClass} flex items-center justify-center`}>
                  <span className="text-foreground/50">Project Preview</span>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Case Study: E-commerce PWA</h2>
              <p className="text-muted-foreground">
                Our client, a mid-sized fashion retailer, was struggling with mobile conversions. Their existing website was slow on mobile devices, leading to high bounce rates and abandoned carts.
              </p>
              <p className="text-muted-foreground">
                We built a Progressive Web App that loads in under 2 seconds, works offline, and provides a native-like shopping experience. The results were impressive:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
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
                  <span>42% increase in mobile conversion rate</span>
                </li>
                <li className="flex items-start">
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
                  <span>37% reduction in bounce rate</span>
                </li>
                <li className="flex items-start">
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
                  <span>28% increase in time spent on site</span>
                </li>
              </ul>
              <Button className="mt-4">Read Full Case Study</Button>
            </div>
            <div>
              <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border">
                <div className="text-center space-y-2">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Case study image/video would go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Build Your Next Project?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Let's work together to create a PWA that meets your business goals.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
