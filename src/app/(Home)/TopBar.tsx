"use client"
import { Button } from '@/components/ui/button'
import { Mail, MailIcon, MessageCircle, MessageCircleCode, MessageSquare, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TopBar() {
    const openChat = () => {
        if (window.Tawk_API) {
          window.Tawk_API.maximize(); 
        }
      };
  return (
    <header className=" px-1 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1  items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary hidden">
            Logo
          </Link>
        </div>
        <nav className="  flex justify-end ">
        <Button aria-label="personal chat" className=' border-0 border-r-2 border-gray-200 dark:border-slate-600 rounded-none' onClick={openChat} variant="outline" size="default">
            <MessageCircleCode className="w-5 h-5 sm:mr-2" />
            <span className="hidden lg:inline">Personal Live Chat</span>
          </Button>

          <Link href={'https://wa.me/19179331132?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank" rel="noopener noreferrer">
          <Button aria-label="whatsapp" className='border-0 border-r-2 border-gray-200 dark:border-slate-600 rounded-none' variant="outline" size="default">
            <Image src={'/imgs/whatsapp.png'} width={20} height={20} alt='whatsapp' className=" sm:mr-2" ></Image>
            <span className="hidden lg:inline">Whatsapp Now</span>
          </Button>
          </Link>

          <Link href={'mailto:support@takingmyclassesonline.com'} target="_blank" rel="noopener noreferrer">
          <Button aria-label="mail" className='border-0 border-r-2 bborder-gray-200 dark:border-slate-600 rounded-none' variant="outline" size="default">
            <MailIcon className="w-5 h-5 sm:mr-2" />
            <span className="hidden lg:inline">support@takingmyclassesonline.com</span>
          </Button>
          </Link>

          <Button aria-label="number" className=' border-0 border-r-2 border-gray-200 dark:border-slate-600 rounded-none' variant="outline" size="default" asChild>
            <Link aria-label="Call us" href="tel:19179331132">
              <Phone className="w-5 h-5 sm:mr-2" />
              <span className="hidden lg:inline">Call Us +1 (917) 933-1132</span>
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default TopBar