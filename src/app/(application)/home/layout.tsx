import Navbar from "@/components/Navbar";

const ApplicationLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar
        items={[
          {
            label: "Homepage",
            link: "/home",
          },
          {
            label: "Customize Your Trip",
            link: "#",
          },
          {
            label: "Destination",
            link: "#",
          },
          {
            label: "Article",
            link: "#",
          },
        ]}
      />
      {children}
    </>
  );
};

export default ApplicationLayout;
