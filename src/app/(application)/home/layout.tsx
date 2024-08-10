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
            link: "#",
          },
          {
            label: "Customize Your Trip",
            link: "#customize-experience",
          },
          {
            label: "Destination",
            link: "#destinations",
          },
          {
            label: "Article",
            link: "#articles",
          },
        ]}
      />
      {children}
    </>
  );
};

export default ApplicationLayout;
