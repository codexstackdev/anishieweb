"use client";
import { getVer, updateVer } from '@/hooks/action';
import { verProp } from '@/hooks/types';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [appVer, setVer] = useState({
    url: "",
    version: ""
  });
  const [currentVer, setCurrentVer] = useState<verProp | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = e.target;
    setVer((prev) => ({...prev, [name]: value}));
  }

  useEffect(() => {
    getVer().then((data) => setCurrentVer(data.ver));
  }, [])

  const handleSubmit = async() => {
    try {
        const data = await updateVer(appVer.url, appVer.version);
        if(data.success){
            alert(data.message);
        }
        else{
            alert(data.message);
        }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-8">
          <p className="text-sm font-medium text-muted-foreground">Settings</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            App configuration
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            View and update the version and URL used by your app.
          </p>
        </header>

        <section className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-5 py-4 sm:px-6">
            <h2 className="text-base font-semibold">Application details</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Edit the values below, then save your changes.
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-6 px-5 py-6 sm:px-6">
              <div className="space-y-2">
                <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-28 animate-pulse rounded bg-muted" />
                <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
              </div>
            </div>
          ) : (
            <div className="space-y-6 px-5 py-6 sm:px-6">
              <div className="space-y-2">
                <label htmlFor="app-version" className="text-sm font-medium">
                  App version
                </label>
                <input
                  id="app-version"
                  name="version"
                  type="text"
                  value={appVer.version}
                  onChange={handleChange}
                  placeholder="e.g. 1.0.0"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
                <p className="text-xs text-muted-foreground">
                  Current Version: {currentVer?.version}
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="current-url" className="text-sm font-medium">
                  Current URL
                </label>
                <input
                  id="current-url"
                  name="url"
                  type="url"
                  value={appVer.url}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
                <p className="text-xs text-muted-foreground">
                  Current URL: {currentVer?.url}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col-reverse gap-3 border-t border-border bg-muted/30 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs text-muted-foreground">
              Changes will apply after they are saved.
            </p>
            <button
              type="button"
              disabled={isLoading}
              onClick={handleSubmit}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
            >
              Save changes
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default page