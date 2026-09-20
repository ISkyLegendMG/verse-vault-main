import { Plus, LogIn, LogOut, User, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import ThemeToggle from "@/components/ThemeToggle";

interface AppHeaderProps {
  onCreateNew: () => void;
}

const AppHeader = ({ onCreateNew }: AppHeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-card/90 backdrop-blur-md safe-area-top">
      <div className="flex items-center justify-between px-4 py-3 max-w-4xl mx-auto">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
            <span className="text-gold text-xs font-display font-bold">V</span>
          </div>
          <h1 className="font-display font-bold text-base text-foreground tracking-wide truncate">
            Versos del Mundo
          </h1>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {user ? (
            <>
              <button
                onClick={onCreateNew}
                className="flex items-center gap-1.5 text-gold text-xs font-body bg-gold/10 px-3 py-1.5 rounded-full border border-gold/30 hover:brightness-110 transition-all"
              >
                <Plus size={12} />
                <span className="hidden sm:inline">Crear</span>
              </button>
              <button
                onClick={() => navigate("/my-content")}
                className="text-muted-foreground hover:text-gold transition-colors p-1.5"
                title="Mi Panel"
              >
                <User size={16} />
              </button>
              {user.email === "admin@versos.com" && (
                <button
                  onClick={() => navigate("/admin")}
                  className="text-muted-foreground hover:text-gold transition-colors p-1.5"
                  title="Admin"
                >
                  <Shield size={16} />
                </button>
              )}
              <button
                onClick={signOut}
                className="text-muted-foreground hover:text-gold transition-colors p-1.5"
                title="Cerrar sesión"
              >
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors text-xs font-body px-2 py-1.5"
            >
              <LogIn size={14} />
              <span className="hidden sm:inline">Entrar</span>
            </button>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;