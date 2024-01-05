import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import { Avatar } from '@mui/material';
import { useAtlasUser } from '@/context/UserContext';
import {
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
} from '@mui/material';
import Sidebar from './Sidebar';

export default function DashNav({
  navItems,
}: {
  navItems: { href?: string; name?: string }[];
}) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const { user } = useAtlasUser();

  const handleProfileMenu = () => {
    setOpenProfileMenu(!openProfileMenu);
  };

  const handleClickOutside = (event: any) => {
    if (
      profileMenuRef.current &&
      profileMenuRef.current.contains(event.target as Node)
    ) {
      return;
    }
    setOpenProfileMenu(false);
  };

  return (
    <>
      <nav className="w-full h-fit flex flex-row justify-between items-center px-4 py-2 max-w-6xl mx-auto lg:mb-5">
        <div className="flex flex-row items-center">
          <MenuIcon
            className="mr-3 scale-125 cursor-pointer"
            onClick={() => setOpenSidebar(!openSidebar)}
          />
          <a href="/dashboard">
            <Image
              src="/logo-mm.svg"
              alt="MotorMentor"
              width={150}
              height={50}
              priority
            />
          </a>
        </div>

        <div
          className="h-fit w-fit cursor-pointer flex flex-row items-center"
          ref={profileMenuRef}
          onClick={handleProfileMenu}
        >
          {/* Get the initials of user.name */}
          <Avatar className="bg-secondary-dark">
            {user?.name?.split(' ').map((name) => name[0]) || 'A'}
          </Avatar>
          {openProfileMenu ? (
            <KeyboardArrowUpIcon className="ml-1" />
          ) : (
            <KeyboardArrowDownIcon className="ml-1" />
          )}
        </div>
        <Popper
          open={openProfileMenu}
          anchorEl={profileMenuRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper
                elevation={10}
                className="rounded-lg"
              >
                <ClickAwayListener onClickAway={handleClickOutside}>
                  <MenuList
                    autoFocusItem={openProfileMenu}
                    id="menu-list-grow"
                    className="font-serif"
                  >
                    <Link href="/dashboard/settings">
                      <MenuItem
                        className="text-sm font-semibold"
                        onClick={handleClickOutside}
                      >
                        <SettingsIcon className="mr-2 scale-90 inline-block" />
                        Settings
                      </MenuItem>
                    </Link>

                    <a href="/api/auth/logout">
                      <MenuItem className="text-sm font-semibold">
                        <LogoutIcon className="mr-2 scale-90 inline-block" />
                        Logout
                      </MenuItem>
                    </a>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </nav>
      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        navItems={navItems}
      />
    </>
  );
}
