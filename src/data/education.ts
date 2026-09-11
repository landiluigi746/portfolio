export type EducationProps = {
  yearBegin: number;
  yearEnd?: number;
  place: string;
};

export const education: EducationProps[] = [
  {
    yearBegin: 2026,
    place: "University of Salerno",
  },
  {
    yearBegin: 2021,
    yearEnd: 2026,
    place: "IIS Margherita Hack Baronissi",
  },
];
