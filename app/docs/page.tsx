"use client";

import { NextPage } from 'next';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding-top: 70px; /* Adjust this value to match your navbar's height */
`;

const Layout = styled.div`
  display: flex;
  height: calc(100vh - 70px); /* Adjust this value to match your navbar's height */
`;

const Sidebar = styled.aside`
  width: 240px;
  background-color: #f7f7f7;
  padding: 20px;
  overflow-y: auto;
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 40px;
  overflow-y: auto;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #333;
`;

const SubHeading = styled.h2`
  font-size: 20px;
  color: #555;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

const Link = styled.a`
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavigationLink = styled.a`
  display: block;
  color: #333;
  padding: 10px 0;
  text-decoration: none;

  &:hover {
    color: #0070f3;
  }
`;

const DocPage: NextPage = () => {
  return (
    <PageContainer>
    <Layout>
<Sidebar>
  <NavigationLink href="#introduction">Introduction</NavigationLink>
  <NavigationLink href="#getting-started">Getting Started</NavigationLink>
  <NavigationLink href="#installation">Installation</NavigationLink>
  <NavigationLink href="#configuration">Configuration</NavigationLink>
  <NavigationLink href="#basic-usage">Basic Usage</NavigationLink>
  <NavigationLink href="#api-reference">API Reference</NavigationLink>
  <NavigationLink href="#integrations">Integrations</NavigationLink>
  <NavigationLink href="#advanced-features">Advanced Features</NavigationLink>
  <NavigationLink href="#troubleshooting">Troubleshooting</NavigationLink>
  <NavigationLink href="#faq">FAQ</NavigationLink>
  <NavigationLink href="#contribute">Contribute</NavigationLink>
  <NavigationLink href="#changelog">Changelog</NavigationLink>
</Sidebar>
<Content>
  <Section id="introduction">
    <Heading>Introduction to UpUp</Heading>
    <Paragraph>
      UpUp is an open-source NPM component designed to simplify file uploads
      and integrate seamlessly with cloud storage services like Google Drive and OneDrive.
    </Paragraph>
  </Section>
  <Section id="getting-started">
    <SubHeading>Getting Started with UpUp</SubHeading>
    <Paragraph>
      Learn how to quickly integrate UpUp into your project for handling file uploads.
    </Paragraph>
  </Section>
  <Section id="installation">
    <SubHeading>Installation Guide</SubHeading>
    <Paragraph>
      Instructions on installing UpUp with npm or yarn and setting up the initial configuration.
    </Paragraph>
  </Section>
  <Section id="configuration">
    <SubHeading>Configuring UpUp</SubHeading>
    <Paragraph>
      Detailed guide on configuring UpUp, setting up authentication, and linking to storage services.
    </Paragraph>
  </Section>
  <Section id="basic-usage">
    <SubHeading>Basic Usage of UpUp</SubHeading>
    <Paragraph>
      A walkthrough of basic file upload operations and accessing stored files.
    </Paragraph>
  </Section>
  <Section id="api-reference">
    <SubHeading>API Reference</SubHeading>
    <Paragraph>
      Comprehensive reference for UpUp{"'"}s API, including methods, parameters, and return values.
    </Paragraph>
  </Section>
  <Section id="integrations">
    <SubHeading>Cloud Storage Integrations</SubHeading>
    <Paragraph>
      How to integrate with Google Drive and OneDrive, including setup, permissions, and API usage.
    </Paragraph>
  </Section>
  <Section id="advanced-features">
    <SubHeading>Advanced Features</SubHeading>
    <Paragraph>
      Explore advanced functionalities like batch uploads, progress tracking, and error handling.
    </Paragraph>
  </Section>
  <Section id="troubleshooting">
    <SubHeading>Troubleshooting and Support</SubHeading>
    <Paragraph>
      Common issues and their solutions, along with how to get support.
    </Paragraph>
  </Section>
  <Section id="faq">
    <SubHeading>Frequently Asked Questions</SubHeading>
    <Paragraph>
      Answers to common questions about using UpUp.
    </Paragraph>
  </Section>
  <Section id="contribute">
    <SubHeading>Contributing to UpUp</SubHeading>
    <Paragraph>
      Guidelines for contributing to the UpUp project, including code contributions, bug reports, and feature requests.
    </Paragraph>
  </Section>
  <Section id="changelog">
    <SubHeading>Changelog</SubHeading>
    <Paragraph>
      A record of all the changes made in each version of UpUp.
    </Paragraph>
  </Section>
</Content>
    </Layout>
    </PageContainer>
  );
};

export default DocPage;
