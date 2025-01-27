import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageHero from "@site/src/components/HomepageHero";
import HomepageDemo from "@site/src/components/HomepageDemo";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Toast from "@site/src/components/Toast";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Upup by Devino" description={siteConfig.tagline}>
      <HomepageHero />
      <main>
        <HomepageDemo />
        <HomepageFeatures />
      </main>
      <Toast />
    </Layout>
  );
}
