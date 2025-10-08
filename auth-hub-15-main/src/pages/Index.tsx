import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Users, CheckCircle } from "lucide-react";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent sm:text-6xl">
              Secure Authentication System
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              A complete full-stack authentication solution with JWT tokens, role-based access, and secure password management
            </p>
          </div>

          {user ? (
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <p className="text-lg font-medium">Welcome back, {user.email}!</p>
              <Link to="/profile">
                <Button size="lg">Go to Profile</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/auth/login">
                <Button size="lg" variant="default">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button size="lg" variant="outline">
                  Create Account
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-[var(--shadow-auth)] transition-transform hover:scale-[1.02]" style={{ transition: "var(--transition-smooth)" }}>
            <CardHeader>
              <Shield className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>JWT Authentication</CardTitle>
              <CardDescription>
                Secure token-based authentication with automatic session management and refresh tokens
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-[var(--shadow-auth)] transition-transform hover:scale-[1.02]" style={{ transition: "var(--transition-smooth)" }}>
            <CardHeader>
              <Lock className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Password Security</CardTitle>
              <CardDescription>
                Industry-standard bcrypt hashing with secure password reset and email verification flows
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-[var(--shadow-auth)] transition-transform hover:scale-[1.02]" style={{ transition: "var(--transition-smooth)" }}>
            <CardHeader>
              <Users className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Role-Based Access</CardTitle>
              <CardDescription>
                Flexible user roles system with admin and user permissions for scalable applications
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-24">
          <h2 className="mb-8 text-center text-3xl font-bold">Built With Modern Technologies</h2>
          <Card className="shadow-[var(--shadow-auth)]">
            <CardContent className="pt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-semibold text-primary">Frontend</div>
                  <div className="text-sm text-muted-foreground">React.js + TypeScript</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-semibold text-primary">Backend</div>
                  <div className="text-sm text-muted-foreground">Lovable Cloud (Supabase)</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-semibold text-primary">Database</div>
                  <div className="text-sm text-muted-foreground">PostgreSQL</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-semibold text-primary">Security</div>
                  <div className="text-sm text-muted-foreground">JWT + RLS Policies</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
