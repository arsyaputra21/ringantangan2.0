import Landing from "../components/Landing";
import About from "../components/About";
import Layout from "../components/Layout";
import Journey from "../components/Journey";
import MariBerbagi from "../components/MariBerbagi";

export default function Home() {
  return (
    <div>
      {/* LANDING */}
      <Landing />
      <Layout>
        {/* ABOUT */}
        <About />
      </Layout>{" "}
      {/* JOURNEY */}
      <Layout>
        <Journey />
      </Layout>
      {/* MARI BERBAGI */}
      <Layout>
        <MariBerbagi />
      </Layout>{" "}
      {/* FOOTER */}
    </div>
  );
}
