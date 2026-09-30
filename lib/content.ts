// Sample content for the prototype. In production this comes from the CMS / playout system.
import { clips, photos, type Clip } from './media';

export { photos, clips };

export type Story = { tag: string; title: string; time: string; img: string; dek?: string; clip?: Clip; duration?: string; em?: string };

export const breaking = 'Erbil International Airport confirms two new direct routes to Europe from November';

export const live = {
  clip: clips.controlRoom,
  title: 'Midday bulletin: parliament session, airport expansion and the week ahead',
};

export const lead: Story = {
  tag: 'Region',
  title: 'Two new European routes put Erbil on the map',
  em: 'on the map',
  dek: 'Direct links cut journey times for the diaspora in half — and put the Kurdistan Region on more investors’ radar. Our correspondents on who gains.',
  time: '38 min ago',
  img: clips.plane.poster,
  clip: clips.plane,
  duration: '4:12',
};

export const alsoToday: Story[] = [
  { tag: 'Politics', title: 'Budget committee sets Thursday hearing', time: '1 hr ago', img: clips.pressInterview.poster, clip: clips.pressInterview, duration: '2:05' },
  { tag: 'Culture', title: 'Citadel restoration enters its most delicate phase', time: '2 hr ago', img: photos.citadel },
  { tag: 'Sport', title: 'Erbil SC name new head coach before the restart', time: '3 hr ago', img: clips.football.poster, clip: clips.football, duration: '1:34' },
];

export const stories: Story[] = [
  { tag: 'Economy', title: 'Inside the tea-house startups turning into exporters', time: '1 hr ago', img: clips.teaKettle.poster, clip: clips.teaKettle, duration: '3:20',
    dek: 'From Erbil’s bazaar to supermarket shelves in Europe.' },
  { tag: 'Business', title: 'Hotels in Erbil report record autumn bookings', time: '2 hr ago', img: clips.divanErbil.poster, clip: clips.divanErbil, duration: '2:41',
    dek: 'New flights and conferences fill the city’s rooms.' },
  { tag: 'Diaspora', title: 'Second-generation Kurds are coming home — and staying', time: '4 hr ago', img: photos.youth,
    dek: 'Why young Kurds from Europe are building careers in the Region.' },
  { tag: 'Environment', title: 'Lake Dokan water levels recover after wet spring', time: '5 hr ago', img: clips.dokan.poster, clip: clips.dokan, duration: '1:58',
    dek: 'Good news for farmers and the summer tourism season.' },
];

export const latest = [
  { time: '12:41', tag: 'Weather', title: 'Rain advisory issued for highland roads north of Soran' },
  { time: '12:20', tag: 'Politics', title: 'Parliament committee schedules budget hearing for Thursday' },
  { time: '11:58', tag: 'Sport', title: 'Erbil SC name new head coach ahead of league restart' },
  { time: '11:30', tag: 'Health', title: 'New paediatric wing opens at Rizgary hospital' },
  { time: '10:52', tag: 'Tech', title: 'Sulaymaniyah hosts its first regional game-developer summit' },
];

export const mostRead = [
  'Visa on arrival: what travellers to Erbil need to know this autumn',
  'The five mountain roads every visitor should drive once',
  'Budget talks: what’s on the table for public-sector salaries',
  'Inside the tea house that has served Erbil for a century',
  'Direct flights from Europe: routes, dates and prices',
];

export const moreNews: Story[] = [
  { tag: 'Economy', title: 'Farmers in the Harir plain expect a record wheat harvest', time: '7 hr ago', img: photos.hills },
  { tag: 'World', title: 'Regional leaders meet in Baghdad on water-sharing talks', time: '8 hr ago', img: photos.meeting },
  { tag: 'Culture', title: 'Qaysari Bazaar traders adapt to a new generation of shoppers', time: '9 hr ago', img: photos.spices },
  { tag: 'Health', title: 'New paediatric wing opens at Rizgary hospital', time: '10 hr ago', img: photos.hospital },
];

export const shorts: Clip[] = [clips.flag, clips.duhokDrone, clips.teaMountain, clips.dance, clips.crowd, clips.hike, clips.teaGlass];

export type Slot = { time: string; end: string; title: string; kind: string; live?: boolean };

// Weekdays — times in Erbil (UTC+3)
export const today: Slot[] = [
  { time: '06:00', end: '08:00', title: 'Morning Sun', kind: 'Breakfast show' },
  { time: '08:00', end: '09:00', title: 'The Briefing', kind: 'News' },
  { time: '09:00', end: '10:00', title: 'Chaikhana', kind: 'Talk' },
  { time: '10:00', end: '12:00', title: 'Newsroom Live', kind: 'News' },
  { time: '12:00', end: '13:00', title: 'Shams Today', kind: 'News', live: true },
  { time: '13:00', end: '14:00', title: 'Roads of Kurdistan', kind: 'Documentary' },
  { time: '14:00', end: '15:00', title: 'Market Watch', kind: 'Business' },
  { time: '15:00', end: '17:00', title: 'Afternoon Edition', kind: 'News' },
  { time: '17:00', end: '18:00', title: 'Second Generation', kind: 'Youth' },
  { time: '18:00', end: '19:00', title: 'Evening News', kind: 'News' },
  { time: '19:00', end: '20:00', title: 'Chaikhana', kind: 'Talk' },
  { time: '20:00', end: '21:00', title: 'Shams Tonight', kind: 'News' },
  { time: '21:00', end: '22:00', title: 'Citadel', kind: 'Documentary' },
  { time: '22:00', end: '23:00', title: 'The Long Read', kind: 'Current affairs' },
];

// Friday & Saturday (the Iraqi weekend)
export const weekend: Slot[] = [
  { time: '07:00', end: '09:00', title: 'Weekend Sun', kind: 'Breakfast show' },
  { time: '09:00', end: '10:00', title: 'The Week in 60', kind: 'News review' },
  { time: '10:00', end: '11:00', title: 'Roads of Kurdistan', kind: 'Documentary' },
  { time: '11:00', end: '12:00', title: 'Second Generation', kind: 'Youth' },
  { time: '12:00', end: '13:00', title: 'Shams Today', kind: 'News' },
  { time: '13:00', end: '15:00', title: 'Weekend Football', kind: 'Sport' },
  { time: '15:00', end: '16:00', title: 'Citadel', kind: 'Documentary' },
  { time: '16:00', end: '18:00', title: 'Chaikhana Weekend', kind: 'Talk' },
  { time: '18:00', end: '19:00', title: 'Evening News', kind: 'News' },
  { time: '19:00', end: '21:00', title: 'Weekend Film', kind: 'Film' },
  { time: '21:00', end: '22:00', title: 'Shams Tonight', kind: 'News' },
];

export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const week: Slot[][] = days.map((d) => (d === 'Fri' || d === 'Sat' ? weekend : today.map(({ live: _live, ...s }) => s)));

export const programs = [
  { slug: 'shams-today', title: 'Shams Today', kind: 'News', when: 'Daily · 12:00', clip: clips.controlRoom,
    blurb: 'The midday bulletin — the Region, Iraq and the world in one hour.' },
  { slug: 'chaikhana', title: 'Chaikhana', kind: 'Talk', when: 'Weekdays · 09:00 & 19:00', clip: clips.teaKettle,
    blurb: 'Named after the tea house: one table, three guests, no script. Politics, culture and everything in between.' },
  { slug: 'roads', title: 'Roads of Kurdistan', kind: 'Documentary', when: 'Tue & Sat · 13:00', clip: clips.snowPeaks,
    blurb: 'A travel series from Amedi to Halabja — villages, mountains and the people who keep them alive.' },
  { slug: 'second-generation', title: 'Second Generation', kind: 'Youth', when: 'Weekdays · 17:00', clip: clips.studioTalk,
    blurb: 'Young Kurds in London, Berlin, Stockholm and Erbil on identity, work and coming home. In English.' },
  { slug: 'market-watch', title: 'Market Watch', kind: 'Business', when: 'Weekdays · 14:00', clip: clips.divanErbil,
    blurb: 'Energy, trade and startups — the numbers behind the Region’s economy.' },
  { slug: 'citadel', title: 'Citadel', kind: 'Documentary', when: 'Tuesdays · 21:00', clip: clips.erbilAerial,
    blurb: 'Six thousand years in one hill. A season-long history of Erbil told through its oldest address.' },
];

export const pillars = [
  { slug: 'ancient', label: 'Heritage', title: 'Walk the world’s oldest streets', img: photos.citadelGate,
    copy: 'Erbil’s Citadel has been lived in for more than six millennia — a UNESCO World Heritage Site in the middle of a modern city.' },
  { slug: 'mountains', label: 'Nature', title: 'Mountains over 3,500 metres', img: clips.mountainClouds.poster, clip: clips.mountainClouds,
    copy: 'Gorges, lakes and snow-capped ridges along the Hamilton Road — about an hour from the capital.' },
  { slug: 'tea', label: 'Food & culture', title: 'Culture served in small glasses', img: clips.teaMountain.poster, clip: clips.teaKettle,
    copy: 'Tea houses are the Region’s parliament, newsroom and living room. Start at Mam Khalil’s.' },
  { slug: 'invest', label: 'Business', title: 'A region open for investment', img: clips.divanErbil.poster, clip: clips.divanErbil,
    copy: 'Energy, agriculture, tourism and tech — with an investment law built for foreign partners.' },
];

export const cities = [
  { slug: 'erbil', name: 'Erbil', local: 'هەولێر', tagline: 'Capital · Citadel city', img: clips.erbilAerial.poster, clip: clips.erbilAerial },
  { slug: 'sulaymaniyah', name: 'Sulaymaniyah', local: 'سلێمانی', tagline: 'Poets, cafés, culture', img: photos.sulaymaniyah },
  { slug: 'duhok', name: 'Duhok', local: 'دهۆک', tagline: 'Valleys & the Amedi plateau', img: clips.duhokDrone.poster, clip: clips.duhokDrone },
  { slug: 'dokan', name: 'Dokan', local: 'دوکان', tagline: 'Lakeside weekends', img: clips.dokan.poster, clip: clips.dokan },
];
