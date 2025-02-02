/* eslint-disable react/no-unescaped-entities */
import Bio from "./components/Bio";
import CardNav from "./components/CardNav";
import Navbar from "./components/Navbar";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  return (
    <div className="flex flex-col p-3 mt-12 mx-2 md:max-w-2xl md:mx-auto lg:max-w-3xl lg:mx-auto mb-3">
      <div className="">
        <h1 className="text-xl font-semibold">hey, i'm Ilham Maulidin 👋</h1>
      </div>
      <div className="mt-6">
        <p>
          I'm a passionate web developer currently navigating the exciting
          realms of college life. 🎓✨. I bring ideas to life through clean,
          interactive interfaces.
        </p>
      </div>
      <div className="mt-10">
        <Bio />
      </div>
      <div className="mt-6 flex flex-row space-x-4">
        <CardNav
          title={"CV"}
          icon={<ArticleIcon />}
          href={
            "https://drive.google.com/file/d/1GLazKmZHm5P6vfO3dC8lCdUok0_S2Fck/view?usp=sharing"
          }
        />
        <CardNav
          title={"Email"}
          icon={<EmailIcon />}
          href={"mailto:ilhammaulidin73@gmail.com"}
        />
      </div>
    </div>
  );
}
