/** Đầu trang dùng chung cho các trang con: nền đêm, tiêu đề Italiana + dòng italic màu sen. */
export function PageHead({
  kicker,
  title,
  italic,
  text,
}: {
  kicker: string;
  title: string;
  italic?: string;
  text?: string;
}) {
  return (
    <section className="page-head">
      <div className="page-head-bg" aria-hidden="true" />
      <div className="wrap">
        <span className="kicker">{kicker}</span>
        <h1 className="display">
          {title}
          {italic && (
            <>
              <br />
              <span className="it">{italic}</span>
            </>
          )}
        </h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
