import Head from 'next/head';
import { useState } from 'react';

const D = {
  brand: 'CUANTOTO',
  domain: 'cuantotologindaftar.com',
  logo: 'https://i.postimg.cc/4d6fjxqX/cuantoto-logo.png',
  linkLogin: 'https://loginwap.gelapsekali.com/cuan',
  linkDaftar: 'https://daftarwap.gelapsekali.com/cuan',
  amphtml: 'cuantotologindaftar.com',
};

const features = [
  { icon: '\u26A1', title: 'Akses Super Cepat', desc: 'Server berperforma tinggi memastikan loading dalam hitungan detik.' },
  { icon: '\u{1F512}', title: 'Keamanan Berlapis', desc: 'Enkripsi SSL 256-bit dan proteksi DDoS tingkat enterprise.' },
  { icon: '\u{1F4F1}', title: 'Mobile Responsive', desc: 'Tampilan otomatis menyesuaikan di semua perangkat.' },
  { icon: '\u{1F517}', title: 'Link Alternatif', desc: 'Banyak link alternatif resmi yang selalu diperbarui.' },
  { icon: '\u{1F3AF}', title: 'Tampilan Modern', desc: 'Desain antarmuka clean dan intuitif untuk kemudahan navigasi.' },
  { icon: '\u{1F4AC}', title: 'Layanan 24 Jam', desc: 'Tim customer service siap membantu kapan saja.' },
];

const faqs = [
  { q: 'Bagaimana cara login CUANTOTO?', a: 'Kunjungi halaman login resmi di situs resmi CUANTOTO, masukkan username dan password, lalu klik Login.' },
  { q: 'Apakah CUANTOTO aman?', a: 'Ya, kami menggunakan enkripsi SSL 256-bit dan proteksi keamanan berlapis tingkat enterprise.' },
  { q: 'Bisa akses dari smartphone?', a: 'Tentu, CUANTOTO dioptimalkan untuk semua perangkat mobile dengan tampilan responsif.' },
  { q: 'Berapa lama proses daftar?', a: 'Proses pendaftaran kurang dari 2 menit, sangat cepat dan mudah.' },
  { q: 'Ada link alternatif?', a: 'Ya, tersedia beberapa link alternatif resmi yang selalu aktif dan diperbarui.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>CUANTOTO | Daftar & Akses Resmi: Portal Kemenangan Tanpa Batas</title>
        <meta name="description" content="Akses CUANTOTO dengan aman dan cepat. Server premium uptime 99.9%, proteksi data berlapis, dan navigasi intuitif untuk semua pengguna." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={D.logo} />
        <link rel="canonical" href={'https://' + D.domain + '/'} />
        <link rel="amphtml" href={'https://' + D.domain + '/amp/'} />
        <meta property="og:title" content="CUANTOTO | Daftar & Akses Resmi: Portal Kemenangan Tanpa Batas" />
        <meta property="og:description" content="Akses CUANTOTO dengan aman dan cepat. Server premium uptime 99.9%, proteksi data berlapis, dan navigasi intuitif untuk semua pengguna." />
        <meta property="og:image" content={D.logo} />
        <meta property="og:url" content={'https://' + D.domain} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="CUANTOTO | Daftar & Akses Resmi: Portal Kemenangan Tanpa Batas" />
        <meta name="twitter:description" content="Akses CUANTOTO dengan aman dan cepat. Server premium uptime 99.9%, proteksi data berlapis, dan navigasi intuitif untuk semua pengguna." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        *{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
        body{font-family:'Plus Jakarta Sans',sans-serif;background:#1a0a0a;color:#e0e0e0;line-height:1.7;overflow-x:hidden}
        a{color:inherit;text-decoration:none}img{max-width:100%;display:block}
        .W{max-width:1200px;margin:0 auto;padding:0 24px}

        .topbar{background:#281212;border-bottom:1px solid rgba(239,68,68,.2);padding:8px 0;font-size:12px;color:#ccc}
        .topbar-inner{display:flex;justify-content:space-between;align-items:center}
        .topbar a{color:#ef4444;font-weight:600;transition:.2s}.topbar a:hover{opacity:.8}

        header{background:#281212;border-bottom:1px solid rgba(239,68,68,.2);position:sticky;top:0;z-index:50;backdrop-filter:blur(12px)}
        .hd{display:flex;align-items:center;justify-content:space-between;padding:14px 0;gap:16px}
        .logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:22px;color:#ef4444;flex-shrink:0}
        .logo img{width:36px;height:36px;border-radius:50%;border:2px solid #ef4444}
        .nav-links{display:flex;gap:6px;flex:1;justify-content:center}
        .nav-links a{padding:8px 16px;font-size:13px;color:#bbb;font-weight:500;border-radius:20px;transition:.2s}
        .nav-links a:hover,.nav-links a.act{color:#ef4444;background:rgba(239,68,68,.12)}
        .hd-btns{display:flex;gap:8px;flex-shrink:0}
        .btn{display:inline-flex;align-items:center;gap:6px;padding:10px 22px;border-radius:24px;font-weight:600;font-size:13px;transition:.25s;border:none;cursor:pointer;font-family:inherit}
        .btn-p{background:#ef4444;color:#1a0a0a}.btn-p:hover{background:#dc2626;transform:translateY(-1px)}
        .btn-o{border:1.5px solid rgba(239,68,68,.2);color:#ef4444;background:transparent}.btn-o:hover{background:rgba(239,68,68,.12)}

        .hero{padding:56px 0;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;right:-120px;top:-120px;width:500px;height:500px;border-radius:50%;background:rgba(239,68,68,.12)}
        .hero::after{content:'';position:absolute;left:-80px;bottom:-100px;width:350px;height:350px;border-radius:50%;background:rgba(239,68,68,.12)}
        .hero-flex{display:flex;align-items:center;gap:48px;position:relative;z-index:1}
        .hero-text{flex:1}
        .hero-text .tag{display:inline-flex;align-items:center;gap:8px;background:rgba(239,68,68,.12);border:1px solid rgba(239,68,68,.2);padding:6px 18px;border-radius:24px;font-size:12px;font-weight:600;color:#ef4444;margin-bottom:18px}
        .hero-text .tag .dot{width:8px;height:8px;border-radius:50%;background:#ef4444;animation:blink 1.5s infinite}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
        .hero-text h1{font-size:clamp(24px,3.8vw,40px);font-weight:800;line-height:1.15;margin-bottom:16px;color:#fff}
        .hero-text p{color:#ccc;font-size:15px;line-height:1.75;margin-bottom:24px;max-width:500px;text-align:justify}
        .hero-text .hbtns{display:flex;gap:12px;flex-wrap:wrap}
        .hero-text .btn-hero{padding:14px 32px;border-radius:28px;font-weight:700;font-size:15px;border:none;cursor:pointer;font-family:inherit;transition:.25s}
        .hero-text .btn-hero.primary{background:#ef4444;color:#1a0a0a}
        .hero-text .btn-hero.primary:hover{background:#dc2626;transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.3)}
        .hero-text .btn-hero.ghost{background:rgba(239,68,68,.12);color:#ef4444;border:1.5px solid rgba(239,68,68,.2)}
        .hero-text .btn-hero.ghost:hover{background:#351a1a}
        .trust-bar{display:flex;gap:22px;margin-top:20px;font-size:12px;color:#bbb}
        .hero-img{flex-shrink:0;width:380px}
        .hero-img img{border-radius:20px;box-shadow:0 24px 64px rgba(0,0,0,.4);border:1px solid rgba(239,68,68,.2)}

        .stats{background:#281212;border-top:1px solid rgba(239,68,68,.2);border-bottom:1px solid rgba(239,68,68,.2);padding:24px 0}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;text-align:center}
        .stat-item{padding:10px 0}
        .stat-item .sv{font-size:28px;font-weight:800;color:#ef4444}
        .stat-item .sl{font-size:10px;color:#bbb;text-transform:uppercase;letter-spacing:1.5px;margin-top:2px}

        .sec{padding:56px 0}
        .sec-alt{background:#281212}
        .sec-head{text-align:center;margin-bottom:40px}
        .sec-head .pill{display:inline-block;background:rgba(239,68,68,.12);color:#ef4444;padding:6px 20px;border-radius:24px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;border:1px solid rgba(239,68,68,.2)}
        .sec-head h2{font-size:clamp(24px,3vw,34px);font-weight:800;margin-bottom:8px;color:#fff}
        .sec-head p{color:#bbb;font-size:14px;max-width:540px;margin:0 auto;text-align:justify}

        .art-row{max-width:900px;margin:0 auto}
        .art-content h3{font-size:22px;font-weight:700;margin-bottom:18px;color:#ef4444}
        .art-content p{color:#ccc;font-size:14px;line-height:1.9;margin-bottom:18px;text-align:justify}
        .art-gallery{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:22px}
        .art-gallery img{border-radius:14px;border:1px solid rgba(239,68,68,.2);width:100%;height:210px;object-fit:cover;transition:.3s}
        .art-gallery img:hover{border-color:#ef4444;transform:scale(1.02)}
        .art-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}
        .art-tag{background:rgba(239,68,68,.12);color:#ef4444;padding:6px 16px;border-radius:24px;font-size:11px;font-weight:600;border:1px solid rgba(239,68,68,.2)}

        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .feat-card{background:#351a1a;border:1px solid rgba(239,68,68,.2);border-radius:18px;padding:28px;transition:.3s}
        .feat-card:hover{border-color:#ef4444;transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.2)}
        .feat-card .fi-icon{width:50px;height:50px;border-radius:14px;background:rgba(239,68,68,.12);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px}
        .feat-card h3{font-size:16px;font-weight:700;margin-bottom:6px;color:#fff}
        .feat-card p{color:#bbb;font-size:13px;margin:0;text-align:justify;line-height:1.6}

        .cta-box{background:linear-gradient(135deg,#dc2626,#ef4444);border-radius:24px;padding:56px 36px;text-align:center;color:#fff;position:relative;overflow:hidden}
        .cta-box::after{content:'';position:absolute;right:-80px;top:-80px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.06)}
        .cta-box>*{position:relative;z-index:1}
        .cta-box h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin-bottom:10px}
        .cta-box p{opacity:.92;margin-bottom:24px;font-size:16px}
        .cta-box .btn-cta{background:#fff;color:#1a0a0a;font-weight:700;padding:16px 36px;border-radius:28px;border:none;cursor:pointer;font-family:inherit;font-size:16px;transition:.25s}
        .cta-box .btn-cta:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(0,0,0,.3)}

        .bnr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .bnr-card{border-radius:16px;overflow:hidden;border:1px solid rgba(239,68,68,.2);transition:.3s}
        .bnr-card:hover{transform:translateY(-3px);box-shadow:0 10px 28px rgba(0,0,0,.2);border-color:#ef4444}
        .bnr-card img{width:100%;height:auto}

        .faq-list{max-width:740px;margin:0 auto}
        .faq-item{background:#351a1a;border:1px solid rgba(239,68,68,.2);border-radius:16px;padding:20px 24px;margin-bottom:10px;cursor:pointer;transition:.2s}
        .faq-item:hover{border-color:#ef4444}
        .faq-q{font-weight:600;display:flex;justify-content:space-between;align-items:center;font-size:15px;color:#f0f0f0}
        .faq-q span{color:#ef4444;font-size:20px;font-weight:700}
        .faq-a{margin-top:12px;color:#bbb;font-size:14px;line-height:1.75;border-top:1px solid rgba(239,68,68,.2);padding-top:12px;text-align:justify}

        footer{background:#281212;border-top:1px solid rgba(239,68,68,.2);padding:40px 0;font-size:13px}
        .ft-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;margin-bottom:24px}
        .ft-col h4{color:#ef4444;font-size:15px;margin-bottom:14px}
        .ft-col a{display:block;color:#aaa;margin-bottom:8px;transition:.2s}.ft-col a:hover{color:#ef4444}
        .ft-bottom{border-top:1px solid rgba(239,68,68,.2);padding-top:20px;text-align:center;color:#999}

        @media(max-width:960px){
          .hero-flex{flex-direction:column;text-align:center}
          .hero-img{width:100%;max-width:420px}
          .hero-text .hbtns,.trust-bar{justify-content:center}
          .hero-text p{text-align:center}
          .nav-links{display:none}
          .art-gallery{grid-template-columns:1fr}
          .feat-grid{grid-template-columns:1fr 1fr}
          .ft-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .feat-grid,.stats-grid{grid-template-columns:1fr}
          .bnr-grid,.ft-grid{grid-template-columns:1fr}
        }
      `}</style>

      <div className="topbar"><div className="W topbar-inner">
        <span>{D.brand} &mdash; Platform Resmi 2026</span>
        <div style={{display:'flex',gap:'16px'}}>
          <a href={D.linkLogin}>Login</a>
          <a href={D.linkDaftar}>Daftar</a>
        </div>
      </div></div>

      <header><div className="W hd">
        <a href="#" className="logo"><img src={D.logo} alt={D.brand} />{D.brand}</a>
        <div className="nav-links">
          <a href="#fitur" className="act">Fitur</a>
          <a href="#tentang">Tentang</a>
          <a href="#promo">Promo</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="hd-btns">
          <a href={D.linkLogin} className="btn btn-o">Login</a>
          <a href={D.linkDaftar} className="btn btn-p">Daftar</a>
        </div>
      </div></header>

      <main>
        <section className="hero"><div className="W">
          <div className="hero-flex">
            <div className="hero-text">
              <div className="tag"><span className="dot"></span> {D.brand} Official</div>
              <h1>CUANTOTO | Daftar & Akses Resmi: Portal Kemenangan Tanpa Batas</h1>
              <p>Akses CUANTOTO dengan aman dan cepat. Server premium uptime 99.9%, proteksi data berlapis, dan navigasi intuitif untuk semua pengguna.</p>
              <div className="hbtns">
                <button className="btn-hero primary" onClick={() => window.location.href=D.linkDaftar}>Daftar Sekarang &rarr;</button>
                <button className="btn-hero ghost" onClick={() => window.location.href=D.linkLogin}>Login Akun</button>
              </div>
              <div className="trust-bar">
                <span>&#10003; SSL 256-bit</span>
                <span>&#10003; Uptime 99.9%</span>
                <span>&#10003; Support 24/7</span>
              </div>
            </div>
            <div className="hero-img">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=450&fit=crop" alt={D.brand + ' Platform'} />
            </div>
          </div>
        </div></section>

        <div className="stats"><div className="W">
          <div className="stats-grid">
            <div className="stat-item"><div className="sv">99.9%</div><div className="sl">Uptime Server</div></div>
            <div className="stat-item"><div className="sv">24/7</div><div className="sl">Customer Support</div></div>
            <div className="stat-item"><div className="sv">1M+</div><div className="sl">Pengguna Aktif</div></div>
            <div className="stat-item"><div className="sv">256-bit</div><div className="sl">Enkripsi SSL</div></div>
          </div>
        </div></div>

        <section className="sec" id="fitur"><div className="W">
          <div className="sec-head">
            <span className="pill">Fitur Unggulan</span>
            <h2>Kenapa Memilih {D.brand}?</h2>
            <p>Nikmati berbagai fitur modern untuk pengalaman terbaik Anda.</p>
          </div>
          <div className="feat-grid">
            {features.map((f, i) => (
              <div className="feat-card" key={i}>
                <div className="fi-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        <section className="sec sec-alt" id="tentang"><div className="W">
          <div className="sec-head">
            <span className="pill">Tentang Kami</span>
            <h2>Mengenal Lebih Dekat {D.brand}</h2>
          </div>
          <div className="art-row">
            <div className="art-content">
              <h3>Panduan Lengkap {D.brand}</h3>
              <div className="art-gallery">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=260&fit=crop" alt={D.brand + ' Health'} />
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=260&fit=crop" alt={D.brand + ' Team'} />
              </div>
              <p>CUANTOTO di situs resmi CUANTOTO menghadirkan harmoni sempurna antara keamanan dan kemudahan akses. Seperti konser musik yang memukau, setiap interaksi dengan platform CUANTOTO dirancang untuk memberikan pengalaman yang memorable. Kecepatan loading yang rhythmic dan antarmuka yang melodis membuat proses login dan registrasi terasa mengalir begitu saja.</p>
              <div className="art-gallery">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=260&fit=crop" alt={D.brand + ' Dashboard'} />
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=260&fit=crop" alt={D.brand + ' Store'} />
              </div>
              <p>Nikmati symphony layanan premium CUANTOTO melalui situs resmi CUANTOTO dengan proteksi enkripsi SSL 256-bit dan server berperforma tinggi. Setiap note keamanan dimainkan dengan sempurna, sementara link alternatif resmi memastikan show must go on tanpa hambatan. Tim support 24/7 adalah crew backstage yang selalu siap memastikan pengalaman Anda berjalan sempurna.</p>
              <div className="art-tags">
                <span className="art-tag">SSL 256-bit</span>
                <span className="art-tag">Uptime 99.9%</span>
                <span className="art-tag">Anti Blokir</span>
                <span className="art-tag">Multi Platform</span>
              </div>
            </div>
          </div>
        </div></section>

        <section className="sec" id="promo"><div className="W">
          <div className="sec-head">
            <span className="pill">Promo &amp; Event</span>
            <h2>Penawaran Terbaik Hari Ini</h2>
          </div>
          <div className="bnr-grid">
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=720&h=280&fit=crop" alt={D.brand + ' Promo 1'} loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=720&h=280&fit=crop" alt={D.brand + ' Promo 2'} loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&h=280&fit=crop" alt={D.brand + ' Promo 3'} loading="lazy" /></a>
          </div>
        </div></section>

        <section className="sec sec-alt"><div className="W">
          <div className="cta-box">
            <h2>Bergabung dengan {D.brand} Sekarang!</h2>
            <p>Daftar gratis dan rasakan layanan premium tanpa batas.</p>
            <button className="btn-cta" onClick={() => window.location.href=D.linkDaftar}>Daftar Gratis &rarr;</button>
          </div>
        </div></section>

        <section className="sec" id="faq"><div className="W">
          <div className="sec-head">
            <span className="pill">FAQ</span>
            <h2>Pertanyaan Yang Sering Diajukan</h2>
            <p>Temukan jawaban seputar {D.brand}.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">{f.q}<span>{openFaq === i ? '\u2212' : '+'}</span></div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div></section>
      </main>

      <footer><div className="W">
        <div className="ft-grid">
          <div className="ft-col">
            <h4>{D.brand}</h4>
            <p style={{color:'#aaa',lineHeight:'1.7'}}>Platform digital terpercaya dengan akses cepat, aman, dan tanpa hambatan.</p>
          </div>
          <div className="ft-col">
            <h4>Navigasi</h4>
            <a href="#fitur">Fitur</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a>
          </div>
          <div className="ft-col">
            <h4>Akses</h4>
            <a href={D.linkLogin}>Login Akun</a><a href={D.linkDaftar}>Daftar Baru</a><a href={D.linkDaftar}>Link Alternatif</a>
          </div>
          <div className="ft-col">
            <h4>Keamanan</h4>
            <a href="#">SSL 256-bit</a><a href="#">Proteksi DDoS</a><a href="#">Anti Blokir</a>
          </div>
        </div>
        <div className="ft-bottom">&copy; 2026 {D.brand}. Situs resmi &mdash; {D.domain}</div>
      </div></footer>
    </>
  );
}
