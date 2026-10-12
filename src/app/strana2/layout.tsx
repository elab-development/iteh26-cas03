export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <p>Layout na stranici 2</p>
        {children}
        <p>Kraj Layout-a na stanici 2 </p>
    </div>
    
  );
}
