/** Shared page header for inner pages. */
export default function PageHead({ kicker, title, italic, text }: { kicker: string; title: string; italic?: string; text?: string }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <span className="kicker">{kicker}</span>
        <h1 className="display">
          {title}
          {italic && (<><br /><span className="it" style={{ color: 'var(--lotus)' }}>{italic}</span></>)}
        </h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
