import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Building2, Info, KeyRound, Mail, ShieldCheck, Users } from "lucide-react";

const mockCuentasAnexas = [
    {
        nombre: "Benjamín Núñez Rojas",
        url: "https://integravali02.buzz/sign-in",
        dominio: "integravali02.buzz",
        iniciales: "BN",
        color: "from-indigo-600 to-cyan-500",
    },
    {
        nombre: "Karina Torres León",
        url: "https://integravali05.space/sign-in",
        dominio: "integravali05.space",
        iniciales: "KT",
        color: "from-violet-600 to-fuchsia-500",
    },
    {
        nombre: "Matías Fredes Madariaga",
        url: "https://integravali04.angendaclinica.boats/sign-in",
        dominio: "integravali04.angendaclinica.boats",
        iniciales: "MF",
        color: "from-emerald-600 to-teal-500",
    },
    {
        nombre: "Johane Fuentealba Díaz",
        url: "https://integravali06.angendaclinica.xyz/dashboard",
        dominio: "integravali06.angendaclinica.xyz",
        iniciales: "JF",
        color: "from-amber-500 to-orange-600",
    },
];

export default function AccesoCuentasAnexasPage() {
    return (
        <div className="relative min-h-full overflow-hidden bg-slate-50 px-4 py-7 sm:px-7 lg:px-10 lg:py-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_38%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.14),transparent_42%)]" />

            <div className="relative mx-auto max-w-5xl">
                <Link
                    href="/dashboard"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Volver al dashboard
                </Link>

                <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
                    <div className="relative border-b border-slate-200 px-6 py-8 sm:px-9 sm:py-10">
                        <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-100/70 blur-3xl" />
                        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-start gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
                                    <Users className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">
                                        Accesos externos
                                    </p>
                                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                        Acceso a cuentas anexas
                                    </h1>
                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                        Selecciona una cuenta para abrir su portal de inicio de sesión en una pestaña nueva.
                                    </p>
                                </div>
                            </div>

                            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                                <ShieldCheck className="h-4 w-4" />
                                Accesos seguros
                            </div>
                        </div>
                    </div>

                    <div className="p-6 sm:p-9">
                        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-amber-950">
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                                <Info className="h-4 w-4" />
                            </span>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-bold">Inicio de sesión requerido</p>
                                <p className="mt-1 text-sm leading-6 text-amber-800">
                                    Puedes ingresar a todas las cuentas IntegraVali utilizando el siguiente usuario administrador:
                                </p>
                                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                                    <div className="flex min-w-0 items-center gap-2 rounded-xl border border-amber-200 bg-white/80 px-3 py-2.5">
                                        <Mail className="h-4 w-4 shrink-0 text-amber-700" />
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-700">Usuario</p>
                                            <p className="truncate text-sm font-semibold text-slate-900">ariela@agenda.cl</p>
                                        </div>
                                    </div>
                                    <div className="flex min-w-0 items-center gap-2 rounded-xl border border-amber-200 bg-white/80 px-3 py-2.5">
                                        <KeyRound className="h-4 w-4 shrink-0 text-amber-700" />
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-700">Contraseña</p>
                                            <p className="break-all text-sm font-semibold text-slate-900">Ariela-agenda-123123</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            {mockCuentasAnexas.map((cuenta) => (
                            <a
                                key={cuenta.url}
                                href={cuenta.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            >
                                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cuenta.color}`} />

                                <div className="flex items-start justify-between gap-4">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cuenta.color} text-sm font-bold text-white shadow-md`}>
                                        {cuenta.iniciales}
                                    </div>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition-all group-hover:border-cyan-200 group-hover:text-cyan-700">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <p className="text-lg font-bold text-slate-900">{cuenta.nombre}</p>
                                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                                        <Building2 className="h-4 w-4 text-slate-400" />
                                        {cuenta.dominio}
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm font-semibold text-indigo-700">
                                    Ir al inicio de sesión
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </a>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
