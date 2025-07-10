"use client";
import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import SocialIcons from "@/components/molecules/SocialIcons";
import FooterLinkGroup from "@/components/molecules/FooterLinkGroup";

const footerLinkData = [
  {
    title: "لینک های سایت",
    links: [
      { label: "منوسایت", href: "#" },
      { label: "تماس باما", href: "#" },
      { label: "تبلیغات در سایت", href: "#" },
    ],
  },
  {
    title: "موضوعات",
    links: [
      { label: "علم و تکنولوژی", href: "#" },
      { label: "پزشکی", href: "#" },
      { label: "سبک زندگی", href: "#" },
    ],
  },
  {
    title: "داغ ترین بحث ها",
    links: [
      { label: "استارتاپ ویکند", href: "#" },
      { label: "ایران خودرو", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#979797] text-black px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
        <div className="flex items-center gap-3">
          <Logo className="w-4 h-7 sm:w-6 sm:h-10" />
          <Text className="text-md sm:text-xl font-bold">سایت خبری تروسکه</Text>
        </div>
        <SocialIcons />
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-row justify-between sm:justify-around text-[12px] sm:text-sm">
          {footerLinkData.map((group, index) => (
            <FooterLinkGroup key={index} {...group} />
          ))}
        </div>
      </div>
    </footer>
  );
}
