import { site } from '@/lib/site';

/** Fixed call / book bar, visible on phones only (see .callbar in globals.css). */
export default function CallBar() {
  return (
    <div className="callbar">
      <a className="btn" href={site.phoneHref}>Call</a>
      <a className="btn solid" href="#book">Book</a>
    </div>
  );
}
