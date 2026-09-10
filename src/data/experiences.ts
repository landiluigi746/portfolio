export type ExperienceProps = {
  name: string;
  type: "Individual" | "Group" | "Mixed";
  year: number;
  description: string;
  position: string;
};

export const experiences: ExperienceProps[] = [
  {
    name: "OliCyber.IT",
    type: "Individual",
    year: 2026,
    description:
      "OliCyber.IT is the Italian Olympiad in Cybersecurity, organized by the Cybersecurity National Lab of CINI with support from the Italian National Cybersecurity Agency, and recognized by the Ministry of Education as a program for valorizing excellence. The competition is based on jeopardy-style Capture-the-Flag challenges, where participants solve independent problems across categories such as cryptography, web security, and software security. I reached the national final and finished in 30th place, earning a bronze medal. This experience strengthened my practical skills in offensive and defensive security while competing against Italy's most promising young cybersecurity talents.",
    position: "Finalist • 30th place • Bronze medal",
  },
  {
    name: "Phaser Game Jam",
    type: "Group",
    year: 2026,
    description:
      'The Phaser Game Jam is a two-phase educational competition for high school students organized by I.I.S. Margherita Hack in collaboration with HackFarm E.T.S. Participants first complete a 60-hour online course on game development fundamentals before advancing to the main event, where teams have just one weekend to build a complete video game from scratch using the Phaser framework and TypeScript. The 2026 edition, held at the University of Salerno\'s Baronissi campus, brought together 26 teams from across Campania and even Sardinia, competing around the theme "(R)Evolution". Games are judged by industry experts and university professors on graphics, sound design, gameplay, theme adherence, and presentation quality. My team won the competition with the game "The Essence" (you can check it in my projects), an achievement that validated our ability to rapidly prototype, collaborate under pressure, and deliver a polished product within strict time constraints.',
    position: "Winner",
  },
  {
    name: "CyberChallenge.IT",
    type: "Mixed",
    year: 2025,
    description:
      "CyberChallenge.IT is an italian national cybersecurity training program for young talents aged 16–24, organized by the Cybersecurity National Lab of CINI with support from the Italian National Cybersecurity Agency. Through a 12-week training path combining theoretical lessons and hands-on Jeopardy Capture-the-Flag exercises, I developed practical skills in cryptography, web security, software security, network security, and malware analysis. The program culminated in a team CTF attack/defence competition simulating real-world attack and defense scenarios, where I strengthened my problem-solving abilities under pressure and learned to think like an adversary. Competing with the University of Salerno team, I reached the national finals, an achievement that validated my technical skills and teamwork under competitive conditions. This experience provided a solid foundation in ethical hacking principles and deepened my passion for pursuing a career in cybersecurity.",
    position: "Finalist",
  },
  {
    name: "Phaser Game Jam",
    type: "Group",
    year: 2025,
    description:
      'The Phaser Game Jam is a two-phase educational competition for high school students organized by I.I.S. Margherita Hack in collaboration with HackFarm E.T.S. Participants first complete a 60-hour online course on game development fundamentals before advancing to the main event, where teams have just one weekend to build a complete video game from scratch using the Phaser framework and TypeScript. The 2025 edition, held at the University of Salerno\'s Baronissi campus, brought together 26 teams from across Campania, competing around the theme "CHAOS". Games are judged by industry experts and university professors on graphics, sound design, gameplay, theme adherence, and presentation quality. My team finished in 4th place with the game "Caos Arcade" (you can check it in my projects), an achievement that validated our ability to rapidly prototype, collaborate under pressure, and deliver a polished product within strict time constraints.',
    position: "4th place",
  },
];

export const featuredExperiences = [experiences[0], experiences[2]];
