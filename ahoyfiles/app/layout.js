import { Inter } from 'next/font/google'
import './globals.css'
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import Link from 'next/link';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ahoy!</span>
      </NavbarBrand>
      <Dropdown
      //TODO make this change based on user profile pic
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://i.pinimg.com/564x/56/57/69/5657692e942b8a56134bc7498aff8d00.jpg" rounded />
          }
        >
          <DropdownItem>Squawks</DropdownItem>
          <DropdownItem>New Plunder</DropdownItem>
          <DropdownItem>Abowt Ye</DropdownItem>
          <DropdownItem>Add Matey</DropdownItem>
        </Dropdown>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Squawks
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          New Plunder
        </NavbarLink>
        <NavbarLink href="#">Abowt Ye</NavbarLink>
      </NavbarCollapse>
      </Navbar>
      {children}
      </body>
    </html>
  )
}
