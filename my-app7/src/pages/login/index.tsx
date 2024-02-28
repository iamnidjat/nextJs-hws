import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {useSession} from "next-auth/react"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {status} = useSession();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn("credentials", { email, password });
      
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/');
    }
  }, [status])

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => signIn("github")}>Login with GitHub</button>
    </div>
  );
}
