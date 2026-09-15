'use client';

import { useEffect, useRef, useState } from 'react';

export default function ExperienciaTcc() {
  const [screen, setScreen] = useState('s-gate');
  const [timer, setTimer] = useState('00:00');
  const [typedText, setTypedText] = useState('');
  const [showEnd, setShowEnd] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const lines = [
    "Hola... disculpa que te llame así de repente...",
    "Es que anoche tuve una crisis muy fuerte y no sé si lo que me pasa es normal...",
    "Siento que no puedo respirar, que todo se va a derrumbar, que algo terrible va a pasar...",
    "Mi terapeuta anterior me dijo que era ansiedad pero nunca me explicó qué hacer cuando pasa...",
    'Solo me decía "respira" y me daba otra cita en 15 días...',
    "¿Tú... tú sabrías qué hacer conmigo?",
  ];

  const go = (id: string) => {
    setScreen(id);
    if (id === 's-oncall') initOnCall();
  };

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const initOnCall = () => {
    clearAllTimers();
    setTimer('00:00');
    setTypedText('');
    setShowEnd(false);

    let sec = 0;
    intervalRef.current = setInterval(() => {
      sec++;
      const m = String(Math.floor(sec / 60)).padStart(2, '0');
      const s = String(sec % 60).padStart(2, '0');
      setTimer(`${m}:${s}`);
    }, 1000);

    let buf = '';
    let li = 0;
    let ci = 0;

    const tick = () => {
      if (li >= lines.length) {
        const t = setTimeout(() => {
          setShowEnd(true);
          if (intervalRef.current) clearInterval(intervalRef.current);
        }, 900);
        timersRef.current.push(t);
        return;
      }
      if (ci === 0 && li > 0) buf += '\n\n';
      const currentLine = lines[li];
      if (ci < currentLine.length) {
        buf += currentLine[ci];
        setTypedText(buf);
        ci++;
        const t = setTimeout(tick, 28 + Math.random() * 35);
        timersRef.current.push(t);
      } else {
        li++;
        ci = 0;
        const t = setTimeout(tick, 700);
        timersRef.current.push(t);
      }
    };

    const t0 = setTimeout(tick, 1000);
    timersRef.current.push(t0);
  };

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .exp-tcc *{margin:0;padding:0;box-sizing:border-box}
        .exp-tcc{background:#000;font-family:'Inter',-apple-system,sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none;}
        .exp-tcc .phone{width:393px;height:852px;max-height:100vh;max-width:100vw;background:#050810;position:relative;overflow:hidden;border-radius:44px;box-shadow:0 0 0 2px #111520;}
        @media(max-width:420px){.exp-tcc .phone{border-radius:0;width:100vw;height:100dvh;height:100vh}}
        .exp-tcc .s{position:absolute;inset:0;display:flex;flex-direction:column;opacity:0;pointer-events:none;transition:opacity .6s ease;overflow:hidden}
        .exp-tcc .s.on{opacity:1;pointer-events:all}
        .exp-tcc .splash{position:relative;justify-content:space-between}
        .exp-tcc .splash-bg{position:absolute;inset:0;background-image:url('/background-splash.jpg');background-size:cover;background-position:center;}
        .exp-tcc .splash-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(3,5,10,.7) 0%,rgba(3,5,10,.35) 30%,rgba(3,5,10,.3) 50%,rgba(3,5,10,.6) 70%,rgba(3,5,10,.92) 100%);}
        .exp-tcc .splash-brand{position:relative;z-index:2;padding:28px 24px 0;display:flex;align-items:center;gap:8px;}
        .exp-tcc .brand-bar{width:3px;height:16px;background:#0d9488;border-radius:1px;}
        .exp-tcc .brand-text{font-size:10px;font-weight:400;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,.4);}
        .exp-tcc .splash-middle{position:relative;z-index:2;padding:0 24px;flex:1;display:flex;flex-direction:column;justify-content:center;}
        .exp-tcc .headline{font-weight:800;text-transform:uppercase;line-height:1.12;letter-spacing:-.5px;}
        .exp-tcc .h-line{display:block;color:#fff;}
        .exp-tcc .h-line-1{font-size:26px}
        .exp-tcc .h-line-2{font-size:31px;color:#2dd4bf;padding:4px 0;}
        .exp-tcc .h-line-3{font-size:31px}
        .exp-tcc .vol-hint{display:flex;align-items:center;gap:8px;margin-top:24px;}
        .exp-tcc .vol-icon{width:18px;height:18px;fill:rgba(255,255,255,.35);animation:vol-blink 1.8s ease-in-out infinite;}
        @keyframes vol-blink{0%,100%{opacity:.2}50%{opacity:.8}}
        .exp-tcc .vol-text{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.3);font-weight:400;}
        .exp-tcc .splash-bottom{position:relative;z-index:2;padding:0 24px 40px;display:flex;flex-direction:column;gap:10px;}
        .exp-tcc .btn-enter{width:100%;padding:20px 24px;border:none;border-radius:4px;background:#0d9488;color:#fff;font-family:'Inter',sans-serif;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;cursor:pointer;transition:all .2s ease;display:flex;align-items:center;justify-content:center;gap:12px;}
        .exp-tcc .btn-enter:hover{background:#0f9d91;box-shadow:0 0 40px rgba(13,148,136,.25)}
        .exp-tcc .btn-enter:active{transform:scale(.97)}
        .exp-tcc .btn-enter svg{width:12px;height:14px;fill:#fff}
        .exp-tcc .btn-skip{width:100%;padding:18px 24px;border:1px solid rgba(255,255,255,.1);border-radius:4px;background:rgba(255,255,255,.02);color:rgba(255,255,255,.35);font-family:'Inter',sans-serif;font-size:11px;font-weight:500;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;transition:all .2s ease;text-decoration:none;text-align:center;display:block;}
        .exp-tcc .btn-skip:hover{border-color:rgba(255,255,255,.2);color:rgba(255,255,255,.5);background:rgba(255,255,255,.03)}
        .exp-tcc .s-call{background:linear-gradient(150deg,#070d1a,#0f1a30,#0e1a2f);justify-content:center;align-items:center;text-align:center;color:#fff;}
        .exp-tcc .call-label{font-size:13px;color:rgba(255,255,255,.3);margin-bottom:10px;letter-spacing:.5px}
        .exp-tcc .avatar{width:88px;height:88px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:34px;position:relative;margin-bottom:18px;background:linear-gradient(135deg,#1a2a45,#1e3a5f);}
        .exp-tcc .avatar-ring{position:absolute;inset:-5px;border-radius:50%;border:2px solid rgba(255,255,255,.1);animation:aring 2s ease-in-out infinite;}
        @keyframes aring{0%,100%{transform:scale(1);opacity:.4}50%{transform:scale(1.18);opacity:0}}
        .exp-tcc .caller-name{font-size:26px;font-weight:600;letter-spacing:-.3px;margin-bottom:3px}
        .exp-tcc .caller-sub{font-size:14px;color:rgba(255,255,255,.4);margin-bottom:4px}
        .exp-tcc .call-status{font-size:13px;color:rgba(255,255,255,.25);margin-bottom:70px}
        .exp-tcc .call-row{display:flex;gap:56px}
        .exp-tcc .call-col{display:flex;flex-direction:column;align-items:center;gap:8px}
        .exp-tcc .cbtn{width:66px;height:66px;border-radius:50%;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .12s;}
        .exp-tcc .cbtn:active{transform:scale(.9)}
        .exp-tcc .cbtn svg{width:26px;height:26px;fill:#fff}
        .exp-tcc .cbtn-red{background:#ef4444}
        .exp-tcc .cbtn-green{background:#22c55e;animation:pgreen 1.8s ease-in-out infinite}
        @keyframes pgreen{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.4)}50%{box-shadow:0 0 0 18px rgba(34,197,94,0)}}
        .exp-tcc .call-col span{font-size:11px;color:rgba(255,255,255,.3)}
        .exp-tcc .s-oncall{background:linear-gradient(150deg,#070d1a,#0f1a30,#0e1a2f);align-items:center;padding-top:80px;color:#fff;}
        .exp-tcc .oc-timer{font-size:17px;color:rgba(255,255,255,.4);font-variant-numeric:tabular-nums;margin-bottom:16px;font-weight:300}
        .exp-tcc .oc-wave{display:flex;gap:3px;align-items:center;height:36px;margin-bottom:28px}
        .exp-tcc .oc-wave i{display:block;width:3px;border-radius:2px;background:rgba(13,148,136,.7);animation:wbar 1s ease-in-out infinite}
        @keyframes wbar{0%,100%{height:6px}50%{height:28px}}
        .exp-tcc .oc-transcript{background:rgba(255,255,255,.05);border-radius:16px;padding:20px 22px;margin:0 24px;font-size:15px;line-height:1.65;color:rgba(255,255,255,.8);max-height:300px;overflow-y:auto;}
        .exp-tcc .oc-cursor{display:inline-block;width:2px;height:15px;background:rgba(13,148,136,.8);vertical-align:middle;margin-left:2px;animation:cblink .7s step-end infinite}
        @keyframes cblink{0%,100%{opacity:1}50%{opacity:0}}
        .exp-tcc .oc-end{margin-top:40px;width:60px;height:60px;border-radius:50%;background:#ef4444;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .6s;}
        .exp-tcc .oc-end.show{opacity:1}
        .exp-tcc .oc-end svg{width:22px;height:22px;fill:#fff}
        .exp-tcc .s-ph{background:#070a12;justify-content:center;align-items:center;color:rgba(255,255,255,.3);text-align:center;padding:40px;font-size:13px;line-height:1.6}
      `}</style>

      <div className="exp-tcc">
        <div className="phone" id="app">
          {/* SPLASH */}
          <div className={`s splash ${screen === 's-gate' ? 'on' : ''}`} id="s-gate">
            <div className="splash-bg"></div>
            <div className="splash-overlay"></div>
            <div className="splash-brand">
              <div className="brand-bar"></div>
              <div className="brand-text">Libros Digitales Online</div>
            </div>
            <div className="splash-middle">
              <div className="headline">
                <span className="h-line h-line-1">¿Estás preparada para</span>
                <span className="h-line h-line-2">un paciente te</span>
                <span className="h-line h-line-3">ponga a prueba?</span>
              </div>
              <div className="vol-hint">
                <svg className="vol-icon" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                <span className="vol-text">Sube el volumen</span>
              </div>
            </div>
            <div className="splash-bottom">
              <button className="btn-enter" onClick={() => go('s-call')}>
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Entrar en la experiencia
              </button>
              <a className="btn-skip" href="https://whop.com/checkout/plan_PJPa2a58K2rfE" target="_blank" rel="noopener noreferrer">
                Ya pasé por la experiencia
              </a>
            </div>
          </div>

          {/* INCOMING CALL */}
          <div className={`s s-call ${screen === 's-call' ? 'on' : ''}`} id="s-call">
            <div className="call-label">llamada entrante</div>
            <div className="avatar"><div className="avatar-ring"></div>👩🏻</div>
            <div className="caller-name">Laura M.</div>
            <div className="caller-sub">Paciente Nueva</div>
            <div className="call-status">llamada entrante...</div>
            <div className="call-row">
              <div className="call-col">
                <button className="cbtn cbtn-red" onClick={() => go('s-lock')}><svg viewBox="0 0 24 24"><path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08A1.003 1.003 0 010 12.38c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.1-.7-.28a11.27 11.27 0 00-2.66-1.85c-.33-.16-.56-.5-.56-.9v-3.1A14.97 14.97 0 0012 9z"/></svg></button>
                <span>Rechazar</span>
              </div>
              <div className="call-col">
                <button className="cbtn cbtn-green" onClick={() => go('s-oncall')}><svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg></button>
                <span>Contestar</span>
              </div>
            </div>
          </div>

          {/* ON CALL */}
          <div className={`s s-oncall ${screen === 's-oncall' ? 'on' : ''}`} id="s-oncall">
            <div className="avatar" style={{ width: 72, height: 72, fontSize: 28, marginBottom: 10 }}>👩🏻</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: 2 }}>Laura M.</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 18 }}>Paciente Nueva</div>
            <div className="oc-timer">{timer}</div>
            <div className="oc-wave">
              {Array.from({ length: 14 }).map((_, i) => (
                <i key={i} style={{ animationDelay: `${i * 0.07}s` }}></i>
              ))}
            </div>
            <div className="oc-transcript">
              <span dangerouslySetInnerHTML={{ __html: typedText.replace(/\n/g, '<br>') }} />
              <span className="oc-cursor"></span>
            </div>
            <button className={`oc-end ${showEnd ? 'show' : ''}`} onClick={() => go('s-lock')}>
              <svg viewBox="0 0 24 24"><path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08A1.003 1.003 0 010 12.38c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.1-.7-.28a11.27 11.27 0 00-2.66-1.85c-.33-.16-.56-.5-.56-.9v-3.1A14.97 14.97 0 0012 9z"/></svg>
            </button>
          </div>

          {/* LOCK SCREEN placeholder */}
          <div className={`s s-ph ${screen === 's-lock' ? 'on' : ''}`} id="s-lock">
            Las demás pantallas están en el archivo completo.<br />Este archivo se enfoca en splash + llamada.
          </div>
        </div>
      </div>
    </>
  );
}
