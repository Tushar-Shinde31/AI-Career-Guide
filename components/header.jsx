import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { checkUser } from '@/lib/checkUser'


const header = async() => {
  await checkUser();
  
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <Link
          href='/'
        >
          <Image src='/logo.png'
            alt='logo'
            width={200}
            height={60}
            className='h-12 py-1 w-auto object-contain'
          ></Image>
        </Link>

        <div className='flex items-center space-x-2 md:space-x-4'>
          <SignedIn>
            <Link
              href={'/dashboard'} >
              <Button  variant="outline">
                <LayoutDashboard className='h-4 w-4' />
                <span className='hidden md:block'>Industry Insight</span>
              </Button>
            </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <StarsIcon className='h-4 w-4' />
                <span className='hidden md:block'>Growth Tools</span>
                <ChevronDown className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={'/resume'} className='flex items-center gap-2'>
                <FileText className='h-4 w-4 '></FileText>
                <span>Build Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
              <Link href={'/coverletter'} className='flex items-center gap-2'>
                <PenBox className='h-4 w-4 '></PenBox>
                <span>Cover Letter</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
              <Link href={'/interview'} className='flex items-center gap-2'>
                <GraduationCap className='h-4 w-4 '></GraduationCap>
                <span>Interview Prep</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>

          <SignedOut>
        <SignInButton>
          <Button variant="outline">Sign In</Button>
        </SignInButton>
      </SignedOut>
      
      <SignedIn>
        <UserButton
         appearance={{
          elements: {
            avatarBox: "w-10 h-10",
            userButtonPopoverCard: "shadow-xl",
            userPreviewMainIdentifier: "font-semibold",
          }
         }}
         afterSignOutUrl='/'
        ></UserButton>
      </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default header