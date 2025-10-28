import type { FormEvent } from "react";
import { useAuth } from "../context/useAuth";

import { Card, CardHeader, CardContent, CardFooter } from "../components/ui/Card";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function LoginPage() {
  const { login } = useAuth();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Login simulado — apenas salva sessão no localStorage
    login();
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 text-white overflow-hidden">

      {/* 🌀 Gradientes de fundo */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.15),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(15,23,42,0.95),rgba(15,23,42,1))]"
        aria-hidden="true"
      />

      {/* 💳 Card central */}
      <div className="relative z-10 w-full max-w-[380px]">
        <Card className="p-6">
          <CardHeader
            title="Acesso ao Painel"
            subtitle="Entre para visualizar seu dashboard financeiro"
          />

          <form onSubmit={handleSubmit}>
            <CardContent>
              {/* Campo E-mail */}
              <div className="flex flex-col">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="voce@email.com"
                  autoComplete="email"
                  required
                />
              </div>

              {/* Campo Senha */}
              <div className="flex flex-col">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
              </div>

              <Button type="submit">Entrar</Button>
            </CardContent>
          </form>

          <CardFooter>
            <p>Login simulado — nenhum dado é enviado ao servidor.</p>
          </CardFooter>
        </Card>

        {/* Rodapé */}
        <div className="mt-6 text-center text-[11px] text-white/30">
          <span className="font-medium text-white/50">fintrack</span> ©{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
