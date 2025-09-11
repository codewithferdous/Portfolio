
// src/components/ui/card.tsx
"use client";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-700 shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
