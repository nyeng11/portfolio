import { HoverEffect } from "./ui/CardHover";

export const projects = [
  {
    title: "Coffee Website UI/UX",
    description:
      "This website features an aesthetic and user-friendly design, perfectly tailored for showcasing coffee services with warmth and elegance.",
    link: "https://www.behance.net/gallery/213818353/Coffee-Shop-Website-UIUX?",
    imgSrc: "/firstCard.png",
  },
  {
    title: "Room Availability UI/UX",
    description:
      "This website showcases a clean and functional design theme, ideal for a room availability system that ensures seamless booking and real-time updates.",
    link: "https://www.behance.net/gallery/213826109/Rooms-Management-System?",
    imgSrc: "/r1.png",
  },
  {
    title: "Portfolio UI/UX",
    description:
      "This website features a modern and visually engaging theme, crafted to showcase personal achievements, projects, and skills with professionalism and style.",
    link: "https://www.behance.net/gallery/213827177/Personal-Portfolio-Website?share=1",
    imgSrc: "/q1.png",
  },
  {
    title: "Gallery App UI",
    description:
      "This gallery app features a sleek, Spotify-inspired UI theme, offering an immersive and visually dynamic experience for browsing and organizing your photos and media.",
    link: "https://www.behance.net/gallery/213827823/Gallery-App-Spotify-Inspired?",
    imgSrc: "/s1.jpg",
  },
  {
    title: "eCommerce UI/UX",
    description:
      "This eCommerce website features a clean and minimalist design, ensuring a smooth, user-friendly shopping experience with easy navigation and seamless transactions.",
    link: "https://www.behance.net/gallery/213828753/E-Commerce-UIUX-Clean-Design?",
    imgSrc: "/e1.png",
  },
  {
    title: "Software PCB Routing UI/UX",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://www.behance.net/gallery/213829499/Software-UIUX-PCB-Routing?",
    imgSrc: "/p2.png",
  },
  {
    title: "Business Sculpture Website UI/UX",
    description:
      "This sculpture business website design features an elegant and artistic UI/UX theme, beautifully showcasing sculptural works with a focus on visual appeal and effortless navigation.",
    link: "https://www.behance.net/gallery/213830011/Business-Sculpture-Website-UIUX?",
    imgSrc: "/rp3-2.png",
  },
  {
    title: "Room Management UI",
    description:
      "This room management UI design offers a clean and organized layout, providing an intuitive and efficient interface for booking, tracking, and managing room availability.",
    link: "https://www.behance.net/gallery/213831345/Room-Management-UI?",
    imgSrc: "/m1.png",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto px-8 py-10">
      <h1 className="text-white font-bold text-4xl md:text-5xl text-center md:text-start">
        UI/UX Projects
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
};

export default Projects;
