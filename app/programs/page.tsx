import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import ProgramGrid from '@/components/ProgramGrid';
import WeekSchedule from '@/components/WeekSchedule';
import SmartVideo from '@/components/video/SmartVideo';
import PlayTrigger from '@/components/video/PlayTrigger';
import { clips } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Programmes & Schedule',
  description: 'Shams TV programmes and the full weekly schedule, in Erbil time or your own.',
};

export default function Programs() {
  return (
    <>
      <section className="page-hero page-hero--short">
        <SmartVideo clip={clips.onAir} poster={clips.onAir.poster} mode="background" sizes="100vw" priority className="page-hero__bg" />
        <div className="page-hero__shade" />
        <div className="container page-hero__in">
          <span className="eyebrow eyebrow--sun">Watch</span>
          <h1>Programmes &amp; schedule</h1>
          <p>News on the hour, talk from the tea house, and documentaries from every corner of the Region — live on satellite, online and in the app.</p>
          <div className="page-hero__actions">
            <PlayTrigger clip={clips.controlRoom} live className="btn btn--live btn--lg"><span className="dot dot--pulse" />Watch live now</PlayTrigger>
            <a href="#schedule" className="btn btn--glass btn--lg"><Icon name="clock" size={18} />Today’s schedule</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head"><div><span className="eyebrow">Programmes</span><h2>Our shows</h2><p>Hover a show to preview it; click to watch the trailer.</p></div></div>
          <ProgramGrid />
        </div>
      </section>

      <section className="section section--paper" id="schedule">
        <div className="container">
          <div className="sec-head"><div><span className="eyebrow">Schedule</span><h2>This week on Shams</h2><p>Switch to “My time” to see programmes in your own time zone.</p></div></div>
          <WeekSchedule />
        </div>
      </section>
    </>
  );
}
