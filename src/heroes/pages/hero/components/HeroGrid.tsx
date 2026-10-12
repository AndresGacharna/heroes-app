import { Zap } from "lucide-react";
import { HeroGridCard } from "./HeroGridCard";

const heroes = [
  {
    name: "Superman",
    realName: "Clark Kent",
    company: "DC",
    isActive: true,
    team: "Justice League",
    description:
      "The Last Son of Krypton, protector of Earth and symbol of hope for all humanity.",
    strength: 100,
    intelligence: 80,
    speed: 90,
    durability: 100,
    powers: [
      "Super Strength",
      "Flight",
      "Heat Vision",
      "Super Speed",
      "Work Smart, not Hard",
      "Aetha",
      "pololo",
      "tralalero",
    ],
    yearAppeared: 1938,
  },
  {
    name: "Batman",
    realName: "Bruce Wayne",
    company: "DC",
    isActive: true,
    team: "Justice League",
    description:
      "The Dark Knight of Gotham City, using fear as a weapon against crime and corruption.",
    strength: 60,
    intelligence: 100,
    speed: 60,
    durability: 70,
    powers: ["Martial Arts", "Detective Skills", "Gadgets", "Stealth"],
    yearAppeared: 1939,
  },
  {
    name: "Wonder Woman",
    realName: "Diana Prince",
    company: "DC",
    isActive: true,
    team: "Justice League",
    description:
      "Amazonian princess and warrior, champion of truth, justice, and equality.",
    strength: 90,
    intelligence: 80,
    speed: 80,
    durability: 90,
    powers: ["Super Strength", "Flight", "Combat Mastery", "Lasso of Truth"],
    yearAppeared: 1941,
  },
  {
    name: "Spider-Man",
    realName: "Peter Parker",
    company: "Marvel",
    isActive: true,
    team: "Avengers",
    description:
      "A friendly neighborhood hero balancing great responsibility with everyday life.",
    strength: 75,
    intelligence: 90,
    speed: 80,
    durability: 70,
    powers: ["Web-Slinging", "Wall-Crawling", "Spider-Sense", "Agility"],
    yearAppeared: 1962,
  },
  {
    name: "Iron Man",
    realName: "Tony Stark",
    company: "Marvel",
    isActive: true,
    team: "Avengers",
    description:
      "Genius inventor and billionaire who protects the world in an advanced armored suit.",
    strength: 85,
    intelligence: 100,
    speed: 80,
    durability: 85,
    powers: ["Powered Armor", "Flight", "Repulsor Beams", "Genius Intellect"],
    yearAppeared: 1963,
  },
  {
    name: "Deadpool",
    realName: "Wade Wilson",
    company: "Marvel",
    isActive: false,
    team: "X-Force",
    description:
      "A wisecracking mercenary with an accelerated healing factor and unpredictable methods.",
    strength: 70,
    intelligence: 75,
    speed: 75,
    durability: 95,
    powers: ["Regeneration", "Martial Arts", "Expert Marksman", "Immortality"],
    yearAppeared: 1991,
  },
];

export const HeroGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3">
      {heroes.map((hero) => (
        <HeroGridCard
          key={hero.name}
          {...hero}
          icon={<Zap className="h-4 w-4" />}
        />
      ))}
    </div>
  );
};
