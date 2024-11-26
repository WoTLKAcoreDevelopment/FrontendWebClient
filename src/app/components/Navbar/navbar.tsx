'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Navbar";
import { cn } from "../../../../utils/cn";
import Logo from '@/app/assets/NavbarLogo.png'
import Image from 'next/image';
import Link from "next/link";
import { Menu as MenuIcon, X } from 'lucide-react';

export function NavbarDemo() {
  return (
      <Navbar />
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    if (username && email) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    setIsAuthenticated(false);
    router.push('/signin');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
      <div className="fixed top-0 left-0 right-0 w-full z-50 bg-white dark:bg-black shadow-md">
        <nav className="flex justify-between items-center px-4 py-1 max-w-7xl mx-auto relative">
          {/* Logo */}
          <div className="flex items-center">
            <Link href='/' passHref>
              <Image
                  src={Logo}
                  alt="Company Logo"
                  width={120}
                  height={120}
                  className="hidden md:block"
              />
              <Image
                  src={Logo}
                  alt="Company Logo"
                  width={80}
                  height={80}
                  className="block md:hidden"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="NEWS">
                  <div className="flex flex-col space-y-2 text-sm font-bold">
                    <HoveredLink href="/news">NEWS</HoveredLink>
                    <HoveredLink href="/channel-log">CHANNEL LOG</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="SHOP" >
                  <div className="flex flex-col space-y-2 text-sm font-bold">
                    <HoveredLink href="/shop/world-of-warcraft">World of Warcraft</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="GAME LIST">
                  <div className="flex flex-col space-y-2 text-sm font-bold">
                    <ProductItem
                        title="World of Warcraft"
                        href="/gamelist/world-of-warcraft"
                        src='https://imgs.search.brave.com/qEKKsUfchgJbYHg4D2RkrjwBBOGlrtHR0dupBW26Zk4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2ViL1dv/V19pY29uLnN2Zy8y/MjBweC1Xb1dfaWNv/bi5zdmcucG5n'
                        description="Look your best even when covered in Blood"
                    />
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="SUPPORT">
                  <div className="flex flex-col space-y-2 text-sm font-bold">
                    <HoveredLink href="/help">Help</HoveredLink>
                    <HoveredLink href="/server-info">Server Status</HoveredLink>
                    <HoveredLink href="/bug-tracker">Bug Tracker</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="COMMUNITY">
                  <div className="flex flex-col space-y-2 text-sm font-bold">
                    <HoveredLink href="https://discord.gg/Pe6fkDZ8">Discord</HoveredLink>
                    <HoveredLink href="/forum">Forum</HoveredLink>
                    <HoveredLink href="/dev-team">Team</HoveredLink>
                    <HoveredLink href="/leaderboards">Leaderboards</HoveredLink>
                  </div>
                </MenuItem>
              </Menu>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden absolute left-4 top-1/2 -translate-y-1/2"
                onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-2">
            {isAuthenticated ? (
                <>
                  <button
                      className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                      onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
            ) : (
                <>
                  <Link href='/signin'>
                    <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                      Sign In
                    </button>
                  </Link>
                  <Link href='/create-account'>
                    <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                      Register
                    </button>
                  </Link>
                </>
            )}
          </div>

          {/* Mobile Menu (Overlay) */}
          {isMobileMenuOpen && (
              <div className="md:hidden fixed inset-0 bg-white dark:bg-black z-50 overflow-y-auto">
                <div className="p-4">
                  <button
                      className="absolute top-4 right-4"
                      onClick={closeMobileMenu}
                  >
                    <X size={24} />
                  </button>

                  <div className="flex flex-col space-y-4 mt-16">
                    {/* Mobile Menu Items */}
                    <MobileSectionGroup title="NEWS">
                      <MobileLink href="/news" onClick={closeMobileMenu}>NEWS</MobileLink>
                      <MobileLink href="/channel-log" onClick={closeMobileMenu}>CHANNEL LOG</MobileLink>
                    </MobileSectionGroup>

                    <MobileSectionGroup title="SHOP">
                      <MobileLink href="/shop/world-of-warcraft" onClick={closeMobileMenu}>World of Warcraft</MobileLink>
                    </MobileSectionGroup>

                    <MobileSectionGroup title="GAME LIST">
                      <MobileLink href="/gamelist/world-of-warcraft" onClick={closeMobileMenu}>World of Warcraft</MobileLink>
                    </MobileSectionGroup>

                    <MobileSectionGroup title="SUPPORT">
                      <MobileLink href="/help" onClick={closeMobileMenu}>Help</MobileLink>
                      <MobileLink href="/server-info" onClick={closeMobileMenu}>Server Status</MobileLink>
                      <MobileLink href="/bug-tracker" onClick={closeMobileMenu}>Bug Tracker</MobileLink>
                    </MobileSectionGroup>

                    <MobileSectionGroup title="COMMUNITY">
                      <MobileLink href="https://discord.gg/Pe6fkDZ8" onClick={closeMobileMenu}>Discord</MobileLink>
                      <MobileLink href="/forum" onClick={closeMobileMenu}>Forum</MobileLink>
                      <MobileLink href="/dev-team" onClick={closeMobileMenu}>Team</MobileLink>
                      <MobileLink href="/leaderboards" onClick={closeMobileMenu}>Leaderboards</MobileLink>
                    </MobileSectionGroup>

                    {/* Mobile Auth Buttons */}
                    <div className="mt-8 space-y-4">
                      {isAuthenticated ? (
                          <button
                              className="w-full px-6 py-3 bg-black text-white rounded-lg font-bold"
                              onClick={handleLogout}
                          >
                            Logout
                          </button>
                      ) : (
                          <>
                            <Link href='/signin' className="block" onClick={closeMobileMenu}>
                              <button className="w-full px-6 py-3 bg-black text-white rounded-lg font-bold">
                                Sign In
                              </button>
                            </Link>
                            <Link href='/create-account' className="block" onClick={closeMobileMenu}>
                              <button className="w-full px-6 py-3 bg-black text-white rounded-lg font-bold">
                                Register
                              </button>
                            </Link>
                          </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
          )}
        </nav>
      </div>
  );
}

// Helper component for mobile menu sections
function MobileSectionGroup({
                              title,
                              children
                            }: {
  title: string,
  children: React.ReactNode
}) {
  return (
      <div className="border-b pb-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="space-y-2">
          {children}
        </div>
      </div>
  );
}

// Helper component for mobile links
function MobileLink({
                      href,
                      children,
                      onClick
                    }: {
  href: string,
  children: React.ReactNode,
  onClick?: () => void
}) {
  return (
      <Link
          href={href}
          className="block text-md hover:bg-gray-100 p-2 rounded"
          onClick={onClick}
      >
        {children}
      </Link>
  );
}

export default Navbar;