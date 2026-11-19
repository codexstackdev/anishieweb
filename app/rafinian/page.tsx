"use client"
import { login } from '@/hooks/action';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
    const [user, setData] = useState({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = async(e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await login(user.username, user.password);
            if(data.success){
                router.replace("/asdsacna");    
            }
            else{
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }
    
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12 text-foreground">
      <section className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-8 space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Enter your username and password to sign in.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={user.username}
              onChange={handleChange}
              autoComplete="username"
              placeholder="Your username"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="Your password"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {loading ? "Signing In" : "Sign in"}
          </button>
        </form>
      </section>
    </main>
  )
}

export default page