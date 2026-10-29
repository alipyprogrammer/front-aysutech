import Image from "next/image";
import { Code2 } from "lucide-react";
import { DEVELOPERS } from "@/lib/site-info";

/* توسعه‌دهندگان محصول: آدم‌های پشت دستیار هوشمند */
export default function Developers() {
  return (
    <section className="section developers-section" id="developers">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="section-kicker"><Code2 size={15} />سازندگان محصول</span>
          <h2>آدم‌هایی که دستیار را می‌سازند</h2>
          <p>یک تیم کوچک و حضوری؛ از موتور هوش مصنوعی تا رابط کاربری، همه چیز در آیسو تک ساخته می‌شود.</p>
        </div>

        <div className="dev-grid">
          {DEVELOPERS.map((d) => (
            <article className="dev-card" key={d.name}>
              <div className="dev-photo">
                <Image src={d.photo} alt={d.name} width={220} height={220} sizes="220px" />
              </div>
              <div className="dev-body">
                <h3>{d.name}</h3>
                <span className="dev-role">{d.role}</span>
                <p>{d.bio}</p>
                <div className="dev-stack">{d.stack.map((t) => <b key={t}>{t}</b>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
