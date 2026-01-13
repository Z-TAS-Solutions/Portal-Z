import { Instagram, Twitter, Linkedin, Github, Mail } from "lucide-react";

export default function Socials({ id = "socials" }) {
  const socials = [
    {
      icon: Twitter,
      label: "Twitter",
      url: "#",
      position: { top: "50%", left: "-1%" },
      className: "",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "www.linkedin.com/in/ztas-solutions",
      position: { top: "5%", left: "18%" },
      className: "",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/ztas.solutions/#",
      position: { top: "-15%", left: "50%" },
      className: "-translate-x-1/2",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Z-TAS-Solutions",
      position: { top: "5%", right: "18%" },
      className: "",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:ztas.global@gmail.com",
      position: { top: "50%", right: "-1%" },
      className: "",
    },
  ];

  return (
    <section id={id} className="flex flex-col overflow-y-hidden">
      <div className="h-1/2 flex items-center justify-center my-[2%] mx-auto mb-[15%] md:mb-[2%]">
        <div className="order-2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-3">
            Connect With Us
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <p className="text-white/70 tracking-[0.3em] text-xs uppercase">
              Worldwide
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex items-end justify-center mt-[5%] ">
        <div className="relative grid grid-row-1 grid-col-1 w-full md:w-[80%] items-center place-items-center">
          <img
            src="./Assets/earth.webp"
            alt="Earth"
            className="w-full object-cover opacity-70"
            loading="lazy"
          />

          <div className="absolute w-[95%] h-full z-10 mb-[15%] md:mb-0">
            {socials.map((social, i) => {
              return (
                <a
                  key={social.label}
                  href={social.url}
                  className={`group absolute cursor-pointer transition-transform hover:scale-110 ${social.className}`}
                  style={social.position}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-violet-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-50" />
                      <social.icon className="relative w-7 h-7 text-white/90 group-hover:text-white transition-colors drop-shadow-lg" />
                    </div>

                    <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="backdrop-blur-lg bg-white/15 border border-white/25 rounded-full px-4 py-1.5 shadow-xl whitespace-nowrap">
                        <span className="text-xs text-white/90 font-medium tracking-wide">
                          {social.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </div>
    </section>
  );
}
