import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations();

  return (
    <div className="grid h-screen w-full place-items-center">{t("apple")}</div>
  );
};

export default Home;
