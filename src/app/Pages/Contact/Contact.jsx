import { useState, useRef, useContext, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

import { ActiveHashContext } from "../../components/Helpers/HashContext.jsx";
import PostToWebHook from "../Contact/webhook.jsx";

export default function ContactUs({ id = "contact" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [submitState, setSubmitState] = useState(false);

  const fields = [
    {
      field: "name",
      label: "What's your name?",
      placeholder: "Now don't tell me u don't have one..",
      type: "text",
    },
    {
      field: "email",
      label: "What's your email address?",
      placeholder: "noname@example.com",
      type: "email",
    },
    {
      field: "subject",
      label: "What can we help you with?",
      placeholder: "Project inquiry, support...",
      type: "text",
    },
    {
      field: "message",
      label: "Tell us more about it",
      placeholder: "Share your thoughts, questions, or requirements...",
      type: "textarea",
    },
  ];

  const handleChange = (e) => {
    console.log(e);

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const inputValidator = () => {
    switch (currentSection) {
      case 0:
        return formData.name.trim().length > 0;
      case 1:
        return formData.email.trim().length > 0 && formData.email.includes("@");
      case 2:
        return formData.subject.trim().length > 0;
      case 3:
        return formData.message.trim().length > 0;
      default:
        return false;
    }
  };

  const nextSection = () => {
    if (inputValidator()) {
      setCurrentSection(currentSection + 1);
      UpdateText({ text: fields[currentSection + 1].label });
    }
  };

  const prevSection = () => {
    setCurrentSection(currentSection - 1);
    UpdateText({ text: fields[currentSection - 1].label });
  };

  const FracturedRuneBox = useRef(null);

  const randomChar = () => {
    const charset = "@#$%^&*BCFGH@#$%^&*IJKLMNOP@#$%^&*VWXYZ0123456789!@#$%^&*";
    const i = Math.floor(Math.random() * charset.length);
    return charset[i];
  };

  const UpdateText = ({ text }) => {
    const len = text.length;
    FracturedRuneBox.current.replaceChildren();
    const FragmentedRuneBox = document.createDocumentFragment();

    text.split("").map((char, charIndex) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.setProperty("--i", charIndex);
      span.style.setProperty("--ri", len - charIndex);
      span.setAttribute("fracture", randomChar());
      span.className = "FracturedRune";
      FragmentedRuneBox.append(span);
    });

    FracturedRuneBox.current.append(FragmentedRuneBox);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const isLastSection = currentSection === fields.length - 1;

      if (inputValidator()) {
        if (currentSection < 3) {
          e.preventDefault();
          nextSection();
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState("ongoing");

    const status = await PostToWebHook(formData);
    if (status.ok) {
      setSubmitState(true);
    } else {
      setSubmitState("failed");
    }

    const exec = () => {
      setSubmitState(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setCurrentSection(0);
    };

    setTimeout(exec, 5000);
  };

  const activeHash = useContext(ActiveHashContext);

  const updateSection = () => {
    if (!FracturedRuneBox.current) return;
    UpdateText({ text: fields[currentSection].label });
  };

  useEffect(() => {
    if (activeHash !== "contact") return;
    if (submitState) return;
    updateSection();
    return;
  }, [activeHash, submitState]);

  const scrollSet = () => {
    FracturedRuneBox.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      id={id}
      className="relative flex flex-col w-full scroll-mt-14 md:pt-20 mb-10 "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-900/20 blur-[120px] rounded-full pointer-events-none overflow-y-visible"></div>
      <div className="min-h-screen flex items-center justify-center p-6 relative ">
        <div className="max-w-4xl w-full relative z-10">
          <div className="text-center mb-1">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Please do not contact us, this project is an eternal concept
            </p>
          </div>

          <div className="mb-8 p-6 flex flex-wrap justify-center gap-8 text-md">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-300" />
              <span className="text-slate-300">ztas.global@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-purple-300" />
              <span className="text-slate-300">
                +94710451201 / +94704668874
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-300" />
              <span className="text-slate-300">Colombo, Sri Lanka</span>
            </div>
          </div>
          {submitState === "failed" ? (
            <div className="group relative p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-red-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center text-center space-y-6">
                <div className="relative">
                  <svg
                    className="w-12 h-12 text-red-400/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h.008v.008H12z"
                    />
                  </svg>
                </div>

                <div className="space-y-2 flex flex-col items-center">
                  <h3 className="text-xl font-light tracking-widest text-white uppercase">
                    Connection Interrupted
                  </h3>
                  <p className="text-sm text-white/40 max-w-[240px] leading-relaxed">
                    It seems the digital void swallowed your request. Check your
                    connection and try again, hooman.
                  </p>
                </div>

                <button className="px-8 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:text-white transition-all duration-300 active:scale-95">
                  Try Again
                </button>
              </div>
            </div>
          ) : submitState ? (
            <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 ease-in-out">
              <div className="flex items-center justify-center overflow-hidden">
                {submitState === "ongoing" ? (
                  <div className="flex space-x-2 animate-pulse">
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  </div>
                ) : (
                  <div className="animate-in fade-in zoom-in-95 duration-1000 text-white/90">
                    We will get back to you as swift as the winds of netherwind
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-10 rounded-3xl bg-white/1 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="flex justify-center gap-2 mb-12">
                {fields.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-500 w-8 ${index <= currentSection ? "bg-white/70" : "bg-white/20"} `}
                  />
                ))}
              </div>

              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="mb-8">
                  <div
                    onClick={scrollSet}
                    className="mb-8 flex flex-col justify-center items-center"
                  >
                    <div
                      className="block text-3xl font-semibold text-white mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 FractureRitual"
                      ref={FracturedRuneBox}
                    ></div>

                    {fields[currentSection].type === "textarea" ? (
                      <textarea
                        name={fields[currentSection].field}
                        value={formData[fields[currentSection].field]}
                        rows={6}
                        className="w-full px-6 py-4 text-lg rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder={fields[currentSection].placeholder}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type={fields[currentSection].type}
                        name={fields[currentSection].field}
                        value={formData[fields[currentSection].field]}
                        className="w-full px-6 py-4 text-lg rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        placeholder={fields[currentSection].placeholder}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                      />
                    )}
                  </div>
                </div>

                <div className="flex gap-16 items-center justify-center">
                  {currentSection > 0 && (
                    <button
                      type="button"
                      onClick={prevSection}
                      className="
                    size-13 rounded-full border-2 border-white
                    text-white
                    flex items-center justify-center

                    transition-all duration-200
                    hover:scale-105 hover:bg-white/10

                    active:scale-95
                    cursor-pointer
                    disabled:opacity-40 disabled:pointer-events-none
                    disabled:pointer-events-none
                    group
                   "
                    >
                      <ChevronLeft
                        className="
                        size-8
                        transition-transform duration-200
                        group-hover:-translate-x-1
                      "
                      />
                    </button>
                  )}

                  {currentSection != fields.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextSection}
                      disabled={!inputValidator()}
                      className="
                    size-13 rounded-full border-2 border-white
                    text-white
                    flex items-center justify-center

                    transition-all duration-200
                    hover:scale-105 hover:bg-white/10

                    active:scale-95

                    cursor-pointer
                    disabled:opacity-40 disabled:pointer-events-none
                    disabled:pointer-events-none
                    group
                   "
                    >
                      <ChevronRight
                        className="
                        size-8
                        transition-transform duration-200
                        group-hover:translate-x-1
                      "
                      />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!inputValidator()}
                      className="
                      h-13 px-6 rounded-full 
                      text-white font-semibold 
                      cursor-pointer
                      focus:outline-none disabled:opacity-50 disabled:pointer-events-none 
                      transition-all duration-300 
                      flex items-center justify-center gap-2 group 
                      border-2 border-white"
                    >
                      {submitState ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send
                          <Send className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
