"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AgendaProfesionales() {
  const API = process.env.NEXT_PUBLIC_API_URL || "https://bartelsmansalud.nativecode.cl";
  const router = useRouter();
  const [listaProfesionales, setListaProfesionales] = useState([]);
  const esSeleccionUnica = listaProfesionales.length === 1;

  function irAgendaProfesional(id_profesional) {
    router.push(`/agendaEspecificaProfersional/${id_profesional}`);
  }

  async function seleccionarProfesionales() {
    try {
      const res = await fetch(`${API}/profesionales/seleccionarTodosProfesionales`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      const dataProfesionales = await res.json();
      setListaProfesionales(dataProfesionales);
    } catch {
      return toast.error("No ha sido posible listar profesionales, contacte a soporte IT");
    }
  }

  useEffect(() => {
    seleccionarProfesionales();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f7f6] px-4 py-24 text-slate-900 sm:px-6 sm:py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#f8fbfa_0%,#f1f5f4_52%,#eef3f2_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(182,212,206,0.34),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-[-8%] -z-10 w-[34%] bg-[radial-gradient(circle_at_center,rgba(210,223,229,0.28),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[-10%] -z-10 w-[40%] bg-[radial-gradient(circle_at_center,rgba(191,214,209,0.2),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="mx-auto max-w-6xl">
        <div className="animate-reveal-up text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#52756e]">
            Agenda SaludB
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#17342f] sm:text-5xl lg:text-6xl">
            {esSeleccionUnica ? "Selecciona tu profesional" : "Equipo Profesional"}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#556b67]">
            {esSeleccionUnica
              ? "Conoce al profesional disponible y agenda una atención de manera simple, cercana y acompañada."
              : "Selecciona un profesional para revisar disponibilidad y coordinar una primera evaluacion domiciliaria."}
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#89aaa3]" />
            <div className="h-1 w-1 rounded-full bg-[#6b9189]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#89aaa3]" />
          </div>
        </div>

        <div className={`animate-reveal-up-delay mt-16 grid grid-cols-1 justify-items-center gap-6 ${esSeleccionUnica ? "lg:mt-20" : ""}`}>
          {listaProfesionales.map((profesional, index) => (
            <button
              key={profesional.id_profesional}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => irAgendaProfesional(profesional.id_profesional)}
              className={`animate-reveal-up group relative flex w-full flex-col overflow-hidden text-left opacity-0 transition-all duration-500 hover:-translate-y-1.5 ${
                esSeleccionUnica
                  ? "max-w-5xl rounded-[40px] border border-[#d7e6e1] bg-[linear-gradient(135deg,rgba(255,255,255,0.99)_0%,rgba(247,250,249,0.98)_48%,rgba(241,246,245,0.98)_100%)] p-8 shadow-[0_36px_90px_-44px_rgba(28,66,59,0.28)] ring-1 ring-white hover:border-[#9ec9bf] hover:shadow-[0_42px_100px_-46px_rgba(28,66,59,0.34)] sm:p-10 lg:min-h-[430px] lg:p-14"
                  : "max-w-4xl rounded-[34px] border border-[#cfe3de] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(247,250,249,0.98)_100%)] p-8 shadow-[0_28px_70px_-36px_rgba(30,74,67,0.28)] ring-1 ring-white hover:border-[#93c5bb] hover:shadow-[0_34px_84px_-38px_rgba(30,74,67,0.34)] sm:p-10 lg:min-h-[380px] lg:p-12"
              }`}
            >
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_top_right,rgba(186,213,206,0.26),transparent_58%)]" />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.64)_0%,transparent_38%)]" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#8ebcb2]/0 blur-3xl transition-all duration-500 group-hover:bg-[#8ebcb2]/24" />
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-[#5aa898] via-[#88c3b6] to-[#d7ebe6] transition-all duration-500 group-hover:w-full" />
              <div className={`pointer-events-none absolute border border-[#edf4f2] ${esSeleccionUnica ? "inset-[16px] rounded-[32px]" : "inset-[18px] rounded-[26px]"}`} />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className={`grid gap-8 lg:items-start ${esSeleccionUnica ? "lg:grid-cols-[minmax(0,1.55fr)_minmax(340px,0.95fr)]" : "lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.9fr)]"}`}>
                  <div className="max-w-2xl">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#b9d8d0] bg-[linear-gradient(180deg,#f3fbf8_0%,#dff0eb_100%)] text-2xl font-bold text-[#1a756a] shadow-[0_14px_30px_-20px_rgba(26,117,106,0.45)] transition-all duration-500 group-hover:border-[#8bc5b9] group-hover:bg-[linear-gradient(180deg,#eff9f6_0%,#d8eee8_100%)]">
                        {profesional.nombreProfesional?.charAt(0)}
                      </div>
                      {esSeleccionUnica && (
                        <div className="rounded-full border border-[#d6e7e2] bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6f8b84] backdrop-blur-sm">
                          Atención cercana
                        </div>
                      )}
                    </div>

                    <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b9189]">
                      Tu atención comienza aquí
                    </p>
                    <h2 className={`mt-3 font-semibold tracking-[-0.04em] text-[#163a34] ${esSeleccionUnica ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>
                      {profesional.nombreProfesional}
                    </h2>
                    <p className={`mt-5 max-w-2xl leading-7 text-[#59706b] ${esSeleccionUnica ? "text-base sm:text-[17px]" : "text-[15px] sm:text-base"}`}>
                      {profesional.descripcionProfesional}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <span className="rounded-full border border-[#d6e7e2] bg-[#f7fbfa] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#607a74]">
                        Atención personalizada
                      </span>
                      <span className="rounded-full border border-[#d6e7e2] bg-[#f7fbfa] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#607a74]">
                        Cuidado integral
                      </span>
                      {esSeleccionUnica && (
                        <span className="rounded-full border border-[#d6e7e2] bg-[#f7fbfa] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#607a74]">
                          Agenda acompañada
                        </span>
                      )}
                    </div>

                    {esSeleccionUnica && (
                      <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-[22px] border border-[#e2edeb] bg-white/70 px-5 py-4 backdrop-blur-sm">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#87a09a] sm:text-[10px]">Reserva</p>
                          <p className="mt-2 text-base font-semibold text-[#183c36] sm:text-[17px]">Simple</p>
                        </div>
                        <div className="rounded-[22px] border border-[#e2edeb] bg-white/70 px-5 py-4 backdrop-blur-sm">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#87a09a] sm:text-[10px]">Disponibilidad</p>
                          <p className="mt-2 text-base font-semibold text-[#183c36] sm:text-[17px]">Horarios disponibles</p>
                        </div>
                        <div className="rounded-[22px] border border-[#e2edeb] bg-white/70 px-5 py-4 backdrop-blur-sm">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#87a09a] sm:text-[10px]">Acompañamiento</p>
                          <p className="mt-2 text-base font-semibold text-[#183c36] sm:text-[17px]">Cercano</p>
                        </div>
                      </div>
                    )}

                    {esSeleccionUnica && (
                      <div className="mt-8 rounded-[26px] border border-[#dfebe7] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(245,249,248,0.9)_100%)] px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8ca49f]">
                          Mensaje institucional
                        </p>
                        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#4f6762] sm:text-[16px]">
                          En Integravali Centro Terapéutico Integral trabajamos con vocación, compromiso y cercanía.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className={`relative flex flex-col justify-between border border-[#dce9e5] bg-[linear-gradient(180deg,#fcfefd_0%,#f4f8f7_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ${esSeleccionUnica ? "min-h-[280px] rounded-[32px] p-7" : "min-h-[220px] rounded-[28px] p-6"}`}>
                    {esSeleccionUnica && (
                      <div className="pointer-events-none absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-[#d6e7e2] to-transparent" />
                    )}
                    <div>
                      {esSeleccionUnica && (
                        <div className="mb-6 rounded-[26px] border border-[#dbeae6] bg-[linear-gradient(180deg,#0f3d39_0%,#114842_100%)] p-5 shadow-[0_24px_48px_-32px_rgba(15,61,57,0.48)]">
                          <div className="relative mx-auto flex aspect-[1.05/1] w-full max-w-[220px] items-center justify-center overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(28,201,194,0.18),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_100%)]">
                            <Image
                              src="/logoIntegravali.png"
                              alt="Integravali Centro de Terapias Integrales"
                              fill
                              className="object-contain p-4"
                              sizes="220px"
                              priority
                            />
                          </div>
                        </div>
                      )}
                      <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#78958e]">
                        Siguiente paso
                      </p>
                      <p className={`mt-4 font-semibold tracking-[-0.04em] text-[#183c36] ${esSeleccionUnica ? "text-3xl" : "text-2xl"}`}>
                        Revisar horarios
                      </p>
                      <p className={`mt-3 leading-6 text-[#64807a] ${esSeleccionUnica ? "text-[15px]" : "text-sm"}`}>
                        {esSeleccionUnica
                          ? "Podrás ver los horarios disponibles y elegir el momento que mejor se ajuste a tu atención."
                          : "Ingresa a la disponibilidad del profesional y continua con la reserva de forma clara y directa."}
                      </p>
                    </div>

                    <div className="mt-8 space-y-4">
                      {esSeleccionUnica && (
                        <div className="rounded-[22px] border border-[#e2edeb] bg-white/80 p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#87a09a]">Orientación</p>
                          <p className="mt-2 text-sm leading-6 text-[#5c7771]">Elige este profesional para continuar con tu reserva de forma clara y tranquila.</p>
                        </div>
                      )}
                      <div className="flex items-center justify-between border-t border-[#e5efec] pt-5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1f8f7d] transition-colors duration-300 group-hover:text-[#0f5a52]">
                          Agendar atención
                        </span>
                        <div className={`flex items-center justify-center rounded-full border border-[#bfdad4] bg-[#e8f4f1] transition-all duration-300 group-hover:border-[#8bc5b9] group-hover:bg-[#dff0eb] ${esSeleccionUnica ? "h-12 w-12" : "h-10 w-10"}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className={`${esSeleccionUnica ? "h-5 w-5" : "h-4 w-4"} text-[#1a756a] transition-all duration-300 group-hover:translate-x-px group-hover:text-[#0f5a52]`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-end justify-between gap-4 border-t border-[#e4eeeb] pt-6">
                  <p className={`max-w-2xl leading-6 text-[#6d847f] ${esSeleccionUnica ? "text-[15px]" : "text-sm"}`}>
                    {esSeleccionUnica
                      ? "Una experiencia pensada para que pacientes y familias puedan elegir con confianza y avanzar a la reserva con mayor tranquilidad."
                      : "Selecciona al profesional para revisar disponibilidad, confirmar horario y avanzar con una reserva asistida."}
                  </p>
                  <p className={`text-right font-medium uppercase text-[#9aaea9] ${esSeleccionUnica ? "text-[13px] tracking-[0.38em]" : "text-[12px] tracking-[0.32em]"}`}>
                    AgendaClinica
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="hero-wave opacity-70" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#edf2f1"
            fillOpacity="1"
            d="M0,320L24,314.7C48,309,96,299,144,293.3C192,288,240,288,288,293.3C336,299,384,309,432,277.3C480,245,528,171,576,154.7C624,139,672,181,720,202.7C768,224,816,224,864,218.7C912,213,960,203,1008,208C1056,213,1104,235,1152,218.7C1200,203,1248,149,1296,160C1344,171,1392,245,1416,282.7L1440,320L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
