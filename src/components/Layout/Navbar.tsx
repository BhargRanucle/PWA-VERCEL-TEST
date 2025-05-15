
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Drawer, 
  DrawerContent,
  DrawerOverlay,
  DrawerClose
} from '@/components/ui/drawer';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl font-bold">Ranucle PWA</span>
        </NavLink>
        
        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              <Menu className="h-6 w-6" />
            </Button>
            
            <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DrawerOverlay />
              <DrawerContent className="h-[90vh] max-h-[90vh]">
                <div className="container flex flex-col py-6">
                  <div className="flex justify-end mb-4">
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                      </Button>
                    </DrawerClose>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                          cn(
                            "text-lg py-3 border-b border-border",
                            isActive ? "text-primary font-medium" : "text-foreground hover:text-primary"
                          )
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
