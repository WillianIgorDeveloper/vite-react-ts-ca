import { Button } from "@/presentation/components/ui/button";
import { SignUpProps } from ".";
import { Link } from "react-router-dom";
import { Input } from "@/presentation/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { AtSign, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function SignUpLayout({}: SignUpProps) {
  const [passwordType, setPasswordType] = useState("password");
  return (
    <div className="h-screen flex">
      <div className="lg:flex-1 bg-brand-gradient flex items-center justify-center relative">
        <div className="absolute w-full h-full bg-zinc-800/40 backdrop-blur-sm" />
      </div>
      <div className="w-full p-3 flex flex-col items-center justify-center shadow-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl relative">
        <form className="w-full flex flex-col items-center justify-center p-3 space-y-3 max-w-sm mx-auto">
          <legend className="self-start text-2xl font-semibold">
            Welcome!
          </legend>
          <div className="w-full">
            <Label htmlFor="tag">Tag</Label>
            <div className="relative flex items-center">
              <Input
                id="tag"
                type="text"
                placeholder="yourtag"
                required
                className="pl-8"
              />
              <AtSign className="absolute left-2 text-zinc-200 size-5" />
            </div>
          </div>
          <div className="w-full">
            <Label htmlFor="password">Password</Label>
            <div className="relative flex items-center">
              <Input
                id="password"
                placeholder="At least 6 characters"
                required
              />
              {passwordType === "password" ? (
                <Eye
                  className="absolute right-2 text-zinc-500 cursor-pointer hover:opacity-80"
                  onClick={() => setPasswordType("text")}
                />
              ) : (
                <EyeOff
                  className="absolute right-2 text-zinc-500 cursor-pointer hover:opacity-80"
                  onClick={() => setPasswordType("password")}
                />
              )}
            </div>
          </div>
          <Button className="w-full bg-brand-gradient text-zinc-50">
            Create account
          </Button>
        </form>
        <div className="w-full flex items-center justify-between p-3 bg-zinc-800 rounded my-3 max-w-sm mx-auto">
          <div className="flex gap-3 items-center">
            <div>
              <p className="text-sm">Enter without an account</p>
            </div>
          </div>
          <Button size="sm">Login</Button>
        </div>
        <Link to="/signin">
          <Button variant="link" className="w-full">
            Already have an account? Sign in
          </Button>
        </Link>
      </div>
    </div>
  );
}
