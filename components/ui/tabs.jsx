"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-auto rounded-md p-1 text-primary",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center w-full justify-center whitespace-nowrap rounded-lg p-3 text-base font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50",
        "bg-[#35353d] text-white hover:text-[#18181C]",
        "hover:bg-[#00ff99]",
        "data-[state=active]:bg-[#00ff99] data-[state=active]:text-[#18181C] data-[state=active]:shadow-sm",

        // inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-base font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "min-h-[480px] ring-offset-white focus-visible:outline-none foces-visible:ring-2 focus-visible:ring-slate-950 focus-visbile:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
