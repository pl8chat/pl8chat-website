import { ReactNode } from "react";

export default function FreePlanLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="fixed inset-0 h-screen w-screen bg-white overflow-auto">
        {children}
      </body>
    </html>
  );
}
