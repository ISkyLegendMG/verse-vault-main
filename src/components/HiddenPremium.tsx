import { useState, useEffect } from "react";
import { Lock, Eye, EyeOff, Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { DbPoem } from "@/types/poem";
import { supabase } from "@/integrations/supabase/client";
import PoemCard from "./PoemCard";
import PoemModal from "./PoemModal";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const PREMIUM_PASSWORD = "versos";

const HiddenPremium = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [selectedPoem, setSelectedPoem] = useState<DbPoem | null>(null);
  const [premiumPoems, setPremiumPoems] = useState<DbPoem[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [dailyPoem, setDailyPoem] = useState<DbPoem | null>(null);
  const [view, setView] = useState<"calendar" | "list">("calendar");

  useEffect(() => {
    if (!unlocked) return;
    supabase
      .from("poems")
      .select("*")
      .eq("is_premium", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => setPremiumPoems((data as DbPoem[]) || []));
  }, [unlocked]);

  useEffect(() => {
    if (!unlocked || !selectedDate) return;
    const dateStr = format(selectedDate, "yyyy-MM-dd");
    supabase
      .from("daily_poems")
      .select("*, poems(*)")
      .eq("scheduled_date", dateStr)
      .maybeSingle()
      .then(({ data }) => {
        if (data && data.poems) {
          setDailyPoem(data.poems as unknown as DbPoem);
        } else {
          setDailyPoem(null);
        }
      });
  }, [unlocked, selectedDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PREMIUM_PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  const closeAll = () => {
    setIsOpen(false);
    setUnlocked(false);
    setPassword("");
    setError(false);
    setView("calendar");
  };

  return (
    <>
      {/* Hidden trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 w-6 h-6 flex items-center justify-center opacity-5 hover:opacity-30 transition-opacity duration-700"
        title="" aria-label=""
      >
        <span className="text-foreground text-xs select-none font-display">V</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop"
          style={{ background: "hsl(220 40% 4% / 0.88)" }}
          onClick={closeAll}
        >
          <div
            className="relative max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto rounded-2xl animate-fade-in-up"
            style={{
              background: "linear-gradient(160deg, hsl(var(--card)), hsl(var(--background)))",
              border: "1px solid hsl(var(--border))",
              boxShadow: "0 0 80px hsl(var(--gold) / 0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top banner */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-border/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/20">
                  <span className="text-gold text-xs font-display font-bold">P</span>
                </div>
                <span className="text-foreground font-display text-sm font-semibold tracking-wide">Colección Premium</span>
              </div>
              <button onClick={closeAll} className="text-muted-foreground hover:text-foreground transition-colors text-sm p-1 font-body">
                Cerrar
              </button>
            </div>

            {!unlocked ? (
              <div className="flex flex-col items-center gap-6 px-8 py-12">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-muted/50 border border-border">
                  <Lock size={20} className="text-muted-foreground" />
                </div>
                <div className="text-center">
                  <h3 className="font-display text-lg text-foreground mb-1.5">Acceso Restringido</h3>
                  <p className="text-muted-foreground text-xs font-body">
                    Esta colección es solo para guardianes de la palabra
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col gap-3">
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setError(false); }}
                      placeholder="Contraseña secreta..."
                      autoFocus
                      className={cn(
                        "w-full px-4 py-3 pr-10 rounded-xl text-sm font-body bg-muted/50 border text-foreground placeholder:text-muted-foreground outline-none transition-colors",
                        error ? "border-destructive" : "border-border focus:border-gold"
                      )}
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gold transition-colors">
                      {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                  {error && (
                    <p className="text-destructive text-xs text-center font-body">
                      Contraseña incorrecta
                    </p>
                  )}
                  <button type="submit"
                    className="w-full py-3 rounded-xl font-display text-sm tracking-wider bg-gold text-primary-foreground hover:brightness-110 transition-all">
                    Entrar
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-6">
                {/* View toggle */}
                <div className="flex items-center gap-2 mb-6">
                  <button
                    onClick={() => setView("calendar")}
                    className={cn("px-4 py-2 rounded-xl text-xs font-body transition-all border",
                      view === "calendar" ? "bg-gold/10 border-gold/30 text-gold" : "border-border text-muted-foreground hover:text-foreground")}
                  >
                    <CalendarIcon size={12} className="inline mr-1.5" />
                    Poema del Día
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={cn("px-4 py-2 rounded-xl text-xs font-body transition-all border",
                      view === "list" ? "bg-gold/10 border-gold/30 text-gold" : "border-border text-muted-foreground hover:text-foreground")}
                  >
                    Colección
                  </button>
                </div>

                {view === "calendar" ? (
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="shrink-0 flex justify-center">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="p-3 pointer-events-auto rounded-xl border border-border"
                        locale={es}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground font-display text-sm font-semibold mb-3">
                        {selectedDate ? format(selectedDate, "d 'de' MMMM, yyyy", { locale: es }) : "Selecciona una fecha"}
                      </h3>
                      {dailyPoem ? (
                        <PoemCard poem={dailyPoem} index={0} onClick={setSelectedPoem} />
                      ) : (
                        <div className="text-center py-12 rounded-2xl border border-dashed border-border">
                          <p className="text-muted-foreground text-xs font-body">
                            Sin poema para este día
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {premiumPoems.length > 0 ? (
                      premiumPoems.map((poem, i) => (
                        <PoemCard key={poem.id} poem={poem} index={i} onClick={setSelectedPoem} />
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-12">
                        <p className="text-muted-foreground text-xs font-body">
                          Aún no hay poemas premium
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />
    </>
  );
};

export default HiddenPremium;