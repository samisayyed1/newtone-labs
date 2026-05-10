// Tweaks for Newtone Creative Labs site
const NEWTONE_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#E63946", "#0E0E10", "#F4F1EA"],
  "displayFont": "Anton",
  "accentName": "Vermilion"
}/*EDITMODE-END*/;

const PALETTES = [
  ["#E63946", "#0E0E10", "#F4F1EA"], // Vermilion (default)
  ["#FF3D2E", "#000000", "#F2F0EA"], // Hot red, true black
  ["#D72638", "#1A1A1A", "#EFE9DC"], // Crimson, warm bone
  ["#FF5A1F", "#0E0E10", "#F4F1EA"], // Orange-red shift
  ["#E63946", "#0E0E10", "#1A1A1A"], // Mono dark mode hint
];

const FONTS = ["Anton", "Boldonse", "Archivo Black"];

function NewtoneTweaks(){
  const [t, setTweak] = useTweaks(NEWTONE_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--accent', t.palette[0]);
    r.setProperty('--ink', t.palette[1]);
    r.setProperty('--bone', t.palette[2]);
  }, [t.palette]);

  React.useEffect(() => {
    document.querySelectorAll('.display, h1, h2, .svc-title, .why-title, .cli .name, .contact-mark, .p-step h4, .nav .logo, .stat .n, .marquee-track span')
      .forEach(el => { el.style.fontFamily = `"${t.displayFont}", sans-serif`; });
  }, [t.displayFont]);

  return (
    <TweaksPanel title="Tweaks · Newtone">
      <TweakSection label="Palette" />
      <TweakColor
        label="Color scheme"
        value={t.palette}
        options={PALETTES}
        onChange={(v) => setTweak('palette', v)}
      />
      <TweakSection label="Typography" />
      <TweakRadio
        label="Display font"
        value={t.displayFont}
        options={FONTS}
        onChange={(v) => setTweak('displayFont', v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<NewtoneTweaks />);
