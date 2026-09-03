import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, KeyRound, Mail, Phone, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sign in — footArena" },
      {
        name: "description",
        content:
          "Play. Get scored. Get known. Sign in to footArena with your phone number or email and start building your football story, one match at a time.",
      },
      { property: "og:title", content: "Sign in — footArena" },
      {
        property: "og:description",
        content:
          "Play. Get scored. Get known, your football story, one match at a time.",
      },
    ],
  }),
  component: LoginScreen,
});

type Method = "phone" | "email";

function LoginScreen() {
  const [method, setMethod] = useState<Method>("phone");

  return (
    <AppShell className="justify-between px-5 pt-14 pb-8">
      {/* brand */}
      <header className="flex flex-col gap-7">
        <div className="flex items-center gap-2.5">
          <span className="volt-fill flex size-9 items-center justify-center rounded-xl font-display text-lg font-800 leading-none">
            fA
          </span>
          <span className="font-display text-xl font-700 tracking-wide uppercase">
            foot<span className="text-primary">Arena</span>
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="font-display text-[42px] leading-[0.95] font-700 uppercase">
            Play.
            <br />
            Get scored.
            <br />
            <span className="text-primary">Get known.</span>
          </h1>
          <p className="max-w-[19rem] text-sm leading-relaxed text-muted-foreground">
            Your football story, one match at a time.
          </p>
        </div>
      </header>

      {/* auth panel */}
      <section className="panel mt-8 rounded-3xl p-5">
        <div className="panel-2 mb-4 grid grid-cols-2 gap-1 rounded-2xl p-1">
          <MethodTab
            active={method === "phone"}
            onClick={() => setMethod("phone")}
            icon={<Phone className="size-4" strokeWidth={2.2} />}
            label="Phone OTP"
          />
          <MethodTab
            active={method === "email"}
            onClick={() => setMethod("email")}
            icon={<Mail className="size-4" strokeWidth={2.2} />}
            label="Email"
          />
        </div>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          {method === "phone" ? (
            <Field label="Mobile number">
              <span className="tnum shrink-0 border-r border-border pr-2.5 text-sm font-600 text-foreground/80">
                +91
              </span>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="98765 43210"
                className="tnum w-full bg-transparent text-sm font-500 tracking-wide outline-none placeholder:text-muted-foreground/70"
              />
            </Field>
          ) : (
            <>
              <Field label="Email">
                <input
                  type="email"
                  placeholder="you@club.com"
                  className="w-full bg-transparent text-sm font-500 outline-none placeholder:text-muted-foreground/70"
                />
              </Field>
              <Field label="Password">
                <KeyRound className="size-4 shrink-0 text-muted-foreground" strokeWidth={2.2} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm font-500 outline-none placeholder:text-muted-foreground/70"
                />
              </Field>
            </>
          )}

          <Link
            to="/home"
            className="volt-fill flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-700 tracking-wide uppercase transition-transform active:scale-[0.98]"
          >
            {method === "phone" ? "Send OTP" : "Log in"}
            <ArrowRight className="size-4" strokeWidth={2.6} />
          </Link>
        </form>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
          <ShieldCheck className="size-3.5 text-pitch" strokeWidth={2.4} />
          One account. Player, referee or host — switch anytime.
        </div>
      </section>

      <footer className="mt-6 text-center text-[11px] leading-relaxed text-muted-foreground/80">
        New here?{" "}
        <Link to="/home" className="font-600 text-primary underline-offset-4 hover:underline">
          Create your player profile
        </Link>
      </footer>
    </AppShell>
  );
}

function MethodTab({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 items-center justify-center gap-2 rounded-xl text-xs font-700 tracking-wide uppercase transition-colors ${
        active
          ? "volt-fill"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="panel-2 block rounded-2xl px-4 py-2.5">
      <span className="text-[10px] font-600 tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </span>
      <div className="mt-1 flex items-center gap-2.5">{children}</div>
    </label>
  );
}
