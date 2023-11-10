/* eslint-disable react/no-unescaped-entities */
import Bio from "./components/Bio";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="p-4 mt-12">
      <Navbar />
      <div className="mt-14">
        <h1 className="text-lg font-semibold">hey, i'm Ilham Maulidin 👋</h1>
      </div>
      <div className="mt-6">
        <p>
          I'm a passionate front-end developer currently navigating the exciting
          realms of college life. 🎓✨. Focused on React.js and Next.js, I bring
          ideas to life through clean, interactive interfaces.
        </p>
      </div>
      <div className="mt-10">
        <Bio />
      </div>
    </div>
  );
}
