// Real footage and photography for the prototype.
// Videos: Pexels (free licence, hotlink-friendly CDN). Photos: Unsplash + Pexels video stills.

const pv = (path: string) => `https://videos.pexels.com/video-files/${path}`;
const pimg = (path: string) => `https://images.pexels.com/videos/${path}`;
const ux = (id: string) => `https://images.unsplash.com/photo-${id}`;

export type Clip = { src: string; poster: string; title: string; portrait?: boolean };

export const clips = {
  // Newsroom & live
  controlRoom: { src: pv('3433789/3433789-hd_1280_720_25fps.mp4'), poster: pimg('3433789/free-video-3433789.jpg'), title: 'Inside the Shams control room' },
  onAir: { src: pv('38166806/16203964_1280_720_25fps.mp4'), poster: pimg('38166806/audio-background-broadcast-communication-38166806.jpeg'), title: 'On air' },
  cameramen: { src: pv('30048693/12889039_1280_720_50fps.mp4'), poster: pimg('30048693/camera-camera-men-interviews-reportage-30048693.jpeg'), title: 'Press pack outside parliament' },
  pressInterview: { src: pv('6952251/6952251-hd_1280_720_25fps.mp4'), poster: pimg('6952251/african-famous-interview-journalism-6952251.jpeg'), title: 'Committee chair speaks to reporters' },
  studioTalk: { src: pv('7599982/7599982-hd_1366_720_25fps.mp4'), poster: pimg('7599982/amp-amplifier-attractive-audio-equipment-7599982.jpeg'), title: 'Second Generation — in the studio' },
  plane: { src: pv('11130977/11130977-hd_1280_720_30fps.mp4'), poster: ux('1558204692-5f402fe220b9'), title: 'New routes out of Erbil International' },
  football: { src: pv('37342407/15816484_1280_720_25fps.mp4'), poster: pimg('37342407/pexels-photo-37342407.jpeg'), title: 'Matchday under the lights' },

  // Kurdistan — real locations
  erbilAerial: { src: pv('33143969/14125650_1280_720_30fps.mp4'), poster: pimg('33143969/4k-drone-footage-above-the-city-iraq-kurd-33143969.jpeg'), title: 'Erbil from above' },
  divanErbil: { src: pv('9607084/9607084-hd_1280_720_30fps.mp4'), poster: pimg('9607084/divan-divan-hotel-erbil-hawler-9607084.jpeg'), title: 'Erbil’s business district' },
  dokan: { src: pv('11297585/11297585-hd_1280_720_24fps.mp4'), poster: pimg('11297585/blue-sky-blue-water-dokan-city-lake-11297585.jpeg'), title: 'Lake Dokan' },
  snowPeaks: { src: pv('10979384/10979384-hd_1280_720_24fps.mp4'), poster: pimg('10979384/pexels-photo-10979384.jpeg'), title: 'Snow on the Zagros' },
  mountainClouds: { src: pv('12136746/12136746-hd_1280_720_30fps.mp4'), poster: pimg('12136746/cloudy-green-mountain-iraq-nature-12136746.jpeg'), title: 'Clouds over the highlands' },
  teaKettle: { src: pv('35368956/14985813_1280_720_50fps.mp4'), poster: pimg('35368956/4k-kettle-35368956.jpeg'), title: 'Tea, the Kurdish way' },
  bazaar: { src: pv('36134682/15324119_1280_720_25fps.mp4'), poster: pimg('36134682/2026-gift-items-36134682.jpeg'), title: 'Inside the bazaar' },

  // Portrait — Shams Shorts
  duhokDrone: { src: pv('34406008/14575796_720_1280_30fps.mp4'), poster: pimg('34406008/4k-drone-footage-drone-duhok-duhok-flycam-duhok-34406008.jpeg'), title: 'Flying over Duhok’s mountains', portrait: true },
  teaMountain: { src: pv('26599693/11970303_720_1280_60fps.mp4'), poster: pimg('26599693/beautiful-nature-beautiful-sky-beauty-in-nature-blue-mountains-26599693.jpeg'), title: 'Tea with a view', portrait: true },
  dance: { src: pv('39320747/16730887_720_1280_30fps.mp4'), poster: pimg('39320747/pexels-photo-39320747.jpeg'), title: 'Colours of a Kurdish celebration', portrait: true },
  flag: { src: pv('19771289/19771289-hd_720_1280_30fps.mp4'), poster: pimg('19771289/flag-kurdistan-19771289.jpeg'), title: 'The week in 60 seconds', portrait: true },
  hike: { src: pv('26975053/12040597_720_1280_60fps.mp4'), poster: pimg('26975053/beautiful-sky-blue-mountains-blue-sky-brown-mountains-26975053.jpeg'), title: 'Weekend hikes near Soran', portrait: true },
  crowd: { src: pv('31343045/13377232_720_1280_60fps.mp4'), poster: pimg('31343045/pexels-photo-31343045.jpeg'), title: 'Derby day in the stands', portrait: true },
  teaGlass: { src: pv('9888679/9888679-hd_720_1280_50fps.mp4'), poster: pimg('9888679/pexels-photo-9888679.jpeg'), title: 'How to order tea like a local', portrait: true },
} satisfies Record<string, Clip>;

export const photos = {
  citadel: ux('1707590713861-2437f9a8a43c'),
  citadelGate: ux('1564810253189-5ad91b0b5b57'),
  citadelWide: ux('1707590713835-67b4bc23fa4d'),
  erbilPark: ux('1588379674354-8c9c0ee60e10'),
  village: ux('1527615020922-3c670eed3407'),
  gorge: ux('1645469151759-f8be6933ac73'),
  tea: ux('1546641555-20676239fb5d'),
  teaPour: ux('1661499102718-aebb4886a0bc'),
  spices: ux('1529517986296-847580704921'),
  sulaymaniyah: ux('1594935494113-74e4d71040de'),
  hills: ux('1602341870716-c164c67a361b'),
  waterfall: ux('1559567899-035aa0a60475'),
  meeting: ux('1573164574572-cb89e39749b4'),
  hospital: ux('1512678080530-7760d81faba6'),
  youth: ux('1701232664481-12a9b8ee5c32'),
  press: ux('1617715545172-06ef44b61cc8'),
};
