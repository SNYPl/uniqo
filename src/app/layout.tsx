'use client';  // Convert to Client Component

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header/Header';
import '@/styles/variables.css';
import "@/styles/responsive.css";
import "@/styles/style.css";
import "@/styles/animate.min.css";
import "@/styles/bootstrap.min.css";
import "@/styles/slick.css";
import "@/styles/font-awesome/all.min.css";
import "@/styles/select2.min.css";
import "@/styles/youtube-popup.css"
import Script from 'next/script';
import Image from "next/image";
import MobileNav from '@/components/MobileNav/MobileNav';
import SideMenu from '@/components/SideMenu/SideMenu';
import SearchPopup from '@/components/SearchPopup/SearchPopup';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Footer from '@/components/Footer/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased custom-cursor`}
      >
        <div className="custom-cursor-one"></div>
        <div className="custom-cursor-two"></div>
        {/* <div className="preloader">
            <div className="loading-container">
                <div className="loading-image">
                <Image src="/assets/images/preloader-image.png" alt="logo" width={100} height={100}/>
                <div className="logo-text">
                    <h1>Uniqo</h1>
                </div>
            </div>
        </div>
    </div> */}
        <Header />
        {children}
       
        {/* jQuery first */}
        <Script 
          src="/assets/vendors/jquery/jquery-3.7.1.min.js" 
          strategy="beforeInteractive"
          id="jquery"
        />
      <Script src="/assets/vendors/slick/slick.min.js" strategy="beforeInteractive" />
        
        {/* Bootstrap after jQuery */}
        <Script 
          src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" 
          strategy="afterInteractive"
          id="bootstrap"
        />

        {/* jQuery plugins after jQuery */}
        <Script 
          src="/assets/vendors/jquery-lettering/jquery.lettering.min.js" 
          strategy="afterInteractive"
          id="lettering"
        />

        <Script 
          src="/assets/vendors/wow/wow.js" 
          strategy="afterInteractive"
          id="wow"
        />

        <Script 
          src="/assets/vendors/youtube-popup/youtube-popup.jquery.js" 
          strategy="afterInteractive"
          id="youtube-popup"
        />

        <Script 
          src="/assets/vendors/owl/owl.carousel.min.js" 
          strategy="afterInteractive"
          id="owl-carousel"
        />

        {/* Load custom.js last */}
        <Script 
          src="/assets/js/custom.js" 
          strategy="afterInteractive"
          id="custom"
        />

        

        <Footer />
        <MobileNav />
        <SideMenu />
        <SearchPopup />
        <ScrollToTop />

      </body>
    </html>
  );
}
