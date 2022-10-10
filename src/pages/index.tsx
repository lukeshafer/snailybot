import type { NextPage } from "next";
import Layout from "../components/Layout";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <Layout>
      <header>
        <h1>Toxic Man</h1>
        <p>
          Your new <s>favorite</s> bot
        </p>
        <blockquote>
          what a bastard! <br />
          <cite>- someone, probably about toxic man</cite>
        </blockquote>
      </header>
      <main>
        <section>
          <header>
            <h2>Commands</h2>
          </header>
          <aside>
            <h3>Toxic Response</h3>
            <p>Talk to your &quot;friend&quot;!</p>
            <code>@toxicman (mention him)</code>
          </aside>
          <aside>
            <h3>Questions</h3>
            <p>Ask any Yes or No question!*</p>
            <code>/question your question here</code>
            <p>
              <small>*answer not guaranteed to be helpful</small>
            </p>
          </aside>
          <aside>
            <h3>Names</h3>
            <p>
              Toxic Man can generate a name for any purpose, such as for a
              newborn baby!
            </p>
            <code>/name</code>
          </aside>
        </section>
      </main>
      <footer>
        <section>
          <button onClick={() => signIn}>Log into admin interface</button>
        </section>
      </footer>
    </Layout>
  );
};

export default Home;
