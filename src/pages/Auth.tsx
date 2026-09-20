import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Feather } from "lucide-react";
import { cn } from "@/lib/utils";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (isLogin) {
      const { error } = await signIn(email, password);
      if (error) setError(error.message);
      else navigate("/");
    } else {
      const { error } = await signUp(email, password, displayName);
      if (error) setError(error.message);
      else setSuccess("¡Revisa tu correo electrónico para confirmar tu cuenta!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div
        className="w-full max-w-md rounded-2xl p-10 animate-fade-in-up"
        style={{
          background: "linear-gradient(160deg, hsl(var(--card)), hsl(var(--background)))",
          border: "1px solid hsl(var(--border))",
          boxShadow: "0 20px 60px hsl(var(--gold) / 0.1)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 border border-gold/30 mb-4">
            <Feather size={22} className="text-gold" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            {isLogin ? "Bienvenido de Vuelta" : "Únete a los Poetas"}
          </h1>
          <p className="text-muted-foreground text-sm font-body italic mt-1">
            {isLogin ? "Ingresa a tu colección personal" : "Crea tu cuenta y comparte tus versos"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="text-xs font-body text-muted-foreground mb-1 block">Nombre</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Tu nombre de poeta..."
                className="w-full px-4 py-3 rounded-lg text-sm font-body bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-gold transition-colors"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-body text-muted-foreground mb-1 block">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="poeta@versos.com"
              required
              className="w-full px-4 py-3 rounded-lg text-sm font-body bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-gold transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-body text-muted-foreground mb-1 block">Contraseña</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full px-4 py-3 pr-10 rounded-lg text-sm font-body bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-gold transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gold transition-colors"
              >
                {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-destructive text-xs text-center font-body italic">{error}</p>
          )}
          {success && (
            <p className="text-gold text-xs text-center font-body italic">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={cn(
              "w-full py-3 rounded-lg font-display text-sm tracking-wider transition-all",
              "bg-gold text-primary-foreground hover:brightness-110 disabled:opacity-50"
            )}
          >
            {loading ? "..." : isLogin ? "Ingresar" : "Registrarme"}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => { setIsLogin(!isLogin); setError(""); setSuccess(""); }}
            className="text-muted-foreground text-sm font-body hover:text-gold transition-colors"
          >
            {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Ingresa"}
          </button>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="text-muted-foreground text-xs font-body hover:text-gold transition-colors"
          >
            ← Volver a los poemas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
