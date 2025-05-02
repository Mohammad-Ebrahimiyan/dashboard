import { JSX, ReactNode } from "react";

export interface SocialLink {
  icon: ReactNode;
  href: string;
}

export interface FooterLinkGroup {
    title: string;
    items: string[];
  }

  export interface FooterAbout {
    text: string;
  }
  
  export interface SocialLink {
    icon: JSX.Element;
    href: string;
  }
  
  export interface FooterLinkGroup {
    title: string;
    items: string[];
  }