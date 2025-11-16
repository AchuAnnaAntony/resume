import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'medqr',
    title: 'MEDQR Application',
    description:
      'Web and Android app helping users find nearby medical shops with prescribed medications',
    technologies: ['PHP', 'Bootstrap', 'MySQL', 'Android', 'JavaScript'],
    highlights: [
      'Location-based search',
      'Pharmacy inventory integration',
    ],
  },
  {
    id: 'iBES ',
    title: 'iBES Application',
    description:
      'Web application(PHP) with Javascript validation that helps passengers to search for bus routes and timings',
    technologies: ['PHP', 'Bootstrap', 'MySQL', 'JavaScript'],
    highlights: [
      'Location-based search',
      'Bus route search',
    ],
  },
  {
    id: 'packet-loss-reduction ',
    title: 'Enhanced Mobile Ad-hoc Routing Technique based on Reduction in Packet Loss',
    description:
      'A new route retrieval method called node density method based on AODV in MANET(Ad-hoc technique)',
    technologies: ['Android', 'Java'],
    highlights: [
      'AODV',
      'MANET',
    ],
  },
  {
    id: 'MED_BSN ',
    title: 'MED_BSN Application',
    description:
      'IoT-based project that has various body sensors connected to Arduino board and the readings are coded in Embedded C in Arduino IDE. Raspberry Pi is used as a processor to use the real-time sensor values to send to the android mobile. ',
    technologies: ['Arduino', 'Raspberry Pi', 'Embedded C', 'Android', 'Java'],
    highlights: [
      'Arduino',
      'Raspberry Pi',
      'Embedded C',
      'Android',
      'Java',
    ],
  },
];

