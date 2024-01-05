import { Backdrop, Paper, MenuList, MenuItem } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';
import { useAtlasUser } from '@/context/UserContext';

export default function Sidebar({
  openSidebar,
  setOpenSidebar,
  navItems,
}: {
  openSidebar: boolean;
  setOpenSidebar: any;
  navItems: { href?: string; name?: string }[];
}) {
  const pathname = usePathname();
  const { user } = useAtlasUser();
  const car = user?.cars ? user.cars[0] : null;
  const isSuscribed = user?.isSuscribed;
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openSidebar}
        onClick={() => setOpenSidebar(false)}
      >
        <div
          className={`fixed top-0 left-0 h-fit w-full max-w-lg bg-primary-dark z-50 transform transition-transform duration-300 ease-in-out ${
            openSidebar ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Paper className="py-5 h-fit w-full rounded-tl-none rounded-2xl">
            <div className="flex flex-row justify-between items-center px-4">
              <Link href="/dashboard">
                <Image
                  src="/logo-mm.svg"
                  alt="MotorMentor"
                  width={150}
                  height={50}
                  priority
                />
              </Link>
              <CloseIcon
                className="scale-125 cursor-pointer"
                onClick={() => setOpenSidebar(false)}
              />
            </div>
            <MenuList className="pl-3">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                // if user is not suscribed remove item.name = 'AI Chat'
                if (!isSuscribed && item.name === 'AI Chat') return null;
                return (
                  <Link
                    href={item.href || ''}
                    key={index}
                    className={
                      isActive
                        ? 'text-primary'
                        : 'text-black hover:text-primary transition-all duration-300 ease-in-out'
                    }
                  >
                    <MenuItem className="font-bold font-serif">
                      {item.name}
                    </MenuItem>
                  </Link>
                );
              })}
            </MenuList>
          </Paper>
        </div>
      </Backdrop>
    </>
  );
}
