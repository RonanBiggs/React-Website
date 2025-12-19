//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
// @ts-ignore
import { ParticlesComponent as Particles, BubblesComponent as Bubbles } from './components/Particles';


type ContentSectionProps = {
  id?: string;
  className?: string;
  text: string;
};
const ContentSection: React.FC<ContentSectionProps> = ({ id, className, text }) => (
  <div id={id} className={className}>
    <p className="square-box">{text}</p>
  </div>
);


type NavLink = {
  href: string;
  label: string;
  active?: boolean;
};

const navLinks : NavLink[] = [
  {href: "#home", label: "Home"},
  {href: "#news", label: "News"},
  { href: "#contact", label: "Contact" },
  { href: "#about", label: "About" },
];

const TopNav : React.FC = () => {
  return (
    <div className = "topnav">
    {navLinks.map((link) => (
      <a
      key={link.href}
      href={link.href}
      >
      {link.label}
      </a>
    ))}
    </div>
  )
};
function App() {

  return (
    <>
    <div id="home">

       <Particles />

        <TopNav />
  
        
       <div className="particle-box">
       <Bubbles />
       </div>

       <ContentSection
        id="arbitrary"
        text="just some more stuff on the page"
        className="fixed-center"
        />

        <ContentSection
        id="news"
        text="just some more stuff on the page"
        className="fixed-center lower"
        /> 
       
    </div>



    </>
  ) 
}

export default App
