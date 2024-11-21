'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";  // Import useRouter
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Navbar";
import { cn } from "../../../../utils/cn";
import Logo from '@/app/assets/NavbarLogo.png'
import Image from 'next/image';
import Link from "next/link";

export function NavbarDemo() {
  return (
      <Navbar />
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();  // Initialize useRouter

  useEffect(() => {
    // Check if the user is authenticated by looking for the presence of credentials
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    if (username && email) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    // Remove user credentials and log them out
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    setIsAuthenticated(false);
    // Redirect the user after logging out
    router.push('/signin');  // Redirect to the sign-in page
  };

  return (
      <div className="fixed top-0 left-0 right-0 w-full z-50 bg-white dark:bg-black shadow-md">
        <nav className="flex justify-between items-center px-4 py-1 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Link href='/' passHref>
              <Image
                  src={Logo}
                  alt="Company Logo"
                  width={120}
                  height={120}
              />
            </Link>
            <Menu setActive={setActive}>
              {/* Menu Items */}
              <MenuItem setActive={setActive} active={active} item="NEWS">
                <div className="flex flex-col space-y-2 text-sm font-bold">
                  <HoveredLink href="/news">NEWS</HoveredLink>
                  <HoveredLink href="/channel-log">CHANNEL LOG</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="SHOP">
                <div className="flex flex-col space-y-2 text-sm font-bold">
                  <ProductItem
                      title="World of Warcraft"
                      href="/shop/world-of-warcraft"
                      src='https://i.pinimg.com/736x/c0/09/99/c00999f27e1b935420ce6c04622f6c62.jpg'
                      description="Look your best even when covered in Blood"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="GAME LIST">
                <div className="flex flex-col space-y-2 text-sm font-bold">
                  <ProductItem
                      title="World of Warcraft"
                      href="/gamelist/world-of-warcraft"
                      src='https://i.pinimg.com/736x/c0/09/99/c00999f27e1b935420ce6c04622f6c62.jpg'
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

          {/* Sign In and Register Buttons */}
          <div className="flex space-x-2">
            {isAuthenticated ? (
                <>
                  <button
                      className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                      onClick={handleLogout}
                  >
                    Logout
                  </button>
                  {/* You can add a user profile button here if needed */}
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
        </nav>
      </div>
  );
}

export default Navbar;
