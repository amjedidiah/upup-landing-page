"use client";

import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import {
  BaseConfigs,
  CloudStorageConfigs,
  GoogleConfigs,
  OneDriveConfigs,
  S3Configs,
  UploadAdapter,
  UpupUploader,
} from '@bassem97/upup';

// Mock configuration values
const SPACE_SECRET = 'your_space_secret';
const SPACE_KEY = 'your_space_key';
const SPACE_ENDPOINT = 'your_space_endpoint';
const SPACE_REGION = 'your_space_region';
const SPACE_DOCUMENTS = 'your_space_documents';
const SPACE_IMAGES = 'your_space_images';
const ONEDRIVE_CLIENT_ID = 'your_onedrive_client_id';
const GOOGLE_CLIENT_ID = 'your_google_client_id';
const GOOGLE_APP_ID = 'your_google_app_id';
const GOOGLE_API_KEY = 'your_google_api_key';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  min-height: 100vh;
  width: 100%; /* Ensure full width */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row; /* Default layout for larger screens */
  width: 80%;
  max-width: 1200px;
  margin-top: 80px;
  margin-bottom: 20px;

  @media (max-width: 768px) { /* Adjust for tablets and below */
    flex-direction: column;
    align-items: center;
  }
`;

const Sidebar = styled.aside`
  width: 30%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80%; /* Take more width on smaller screens */
    padding-right: 0; /* Remove padding right */
    margin-bottom: 20px; /* Add some space below for separation */
  }
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); // Creates a grid with flexible columns
  gap: 10px; // Space between grid items
  margin-top: 10px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center; // Vertically align checkbox and label

  @media (min-width: 768px) {
    margin-bottom: 10px; // Only apply bottom margin on larger screens
  }
`;


const StyledCheckbox = styled.input`
  margin-right: 10px;
  accent-color: #007bff;
`;

const Label = styled.label`
  cursor: pointer;
  transition: color 0.3s;
  display: block; /* Ensure label takes the full width of CheckboxItem */

  &:hover {
    color: #007bff;
  }
`;

const UploaderContainer = styled.div`
  width: 70%;

  @media (max-width: 768px) {
    width: 80%; /* Adjust width on smaller screens */
  }
`;


const Title = styled.h1`
  font-size: 2.5em; /* Increase font size for impact */
  color: #333; /* Darker text for better contrast */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Subtle text shadow for depth */
  padding: 0 20px;
  margin-top: 40px; /* Adjust top margin for better spacing */
  transition: margin-top 0.3s ease-in-out; /* Smooth transition for resizing */

  @media (min-width: 768px) {
    padding: 0;
    margin-top: 80px; /* Increase top margin for larger screens */
    font-size: 3em; /* Larger font size for larger screens */
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #555;
  line-height: 1.6;
  width: max-content;
  text-align: center;
  padding: 0 20px;
  margin-top: 20px;
  transition: margin-top 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1em; // Reduce font size for smaller screens
    padding: 0 15px; // Adjust padding for smaller screens
    text-align: left; // Adjust text alignment if needed
    max-width: 450px;
  }

  @media (max-width: 480px) {
    font-size: 0.9em; // Even smaller font size for phone screens
    padding: 0 20px; // Increase padding for phone screens
    max-width: 350px;
  }
`;

const SidebarTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #007bff;
`;

// Main page component
type ServiceKeys =
  | 'GoogleDrive'
  | 'Dropbox'
  | 'OneDrive'
  | 'Unsplash'
  | 'Box';

type ServicesState = {
  [key in ServiceKeys]: boolean;
};

// Main page component
const Page: React.FC = () => {
  const [canUpload, setCanUpload] = useState(false);
const [services, setServices] = useState<ServicesState>({
  GoogleDrive: true, // Set to true for default enabled
  Dropbox: false,
  OneDrive: true, // Set to true for default enabled
  Unsplash: false,
  Box: false,
});

  useEffect(() => {

  }, [canUpload]);


  // S3 Configurations
  const s3Configs = {
    region: SPACE_REGION,
    endpoint: SPACE_ENDPOINT,
    credentials: {
      accessKeyId: SPACE_KEY,
      secretAccessKey: SPACE_SECRET,
    },
  };

  // Uploader Configurations
  const baseConfigs = {
    canUpload: canUpload,
    setKey: () => setCanUpload(true), // This should be your logic to handle key changes
  };

  const cloudStorageConfigs = {
    bucket: SPACE_DOCUMENTS,
    s3Configs,
  };

  const googleConfigs = {
    google_api_key: GOOGLE_API_KEY,
    google_app_id: GOOGLE_APP_ID,
    google_client_id: GOOGLE_CLIENT_ID,
  };

  const oneDriveConfigs = {
    onedrive_client_id: ONEDRIVE_CLIENT_ID,
    multiSelect: false,
  };

  // Handler for service checkboxes
  const handleServiceChange = (service: ServiceKeys) => {
    setServices((prev) => ({ ...prev, [service]: !prev[service] }));
  };

// Define a mapping from service names to UploadAdapter values
const serviceToAdapterMap: { [K in ServiceKeys]: UploadAdapter } = {
  GoogleDrive: UploadAdapter.GOOGLE_DRIVE,
  Dropbox: UploadAdapter.DROPBOX,
  OneDrive: UploadAdapter.ONE_DRIVE,
  Unsplash: UploadAdapter.UNSPLASH,
  Box: UploadAdapter.BOX,
};

// Calculate the upload adapters based on selected services
const uploadAdapters = [
  UploadAdapter.INTERNAL,
  ...Object.entries(services).reduce((acc: UploadAdapter[], [service, isEnabled]) => {
    if (isEnabled && service in serviceToAdapterMap) {
      acc.push(serviceToAdapterMap[service as ServiceKeys]);
    }
    return acc;
  }, []),
];

return (
  <>
    <GlobalStyle />
    <Container>
      <Title>Upup File Uploader Demo</Title>
      <Description>
        This is a demonstration of the UpUp uploader. Select the sources you want to enable and then upload
      </Description>
      <ContentContainer>
        <Sidebar>
          <SidebarTitle>Remote Sources</SidebarTitle>
          <CheckboxContainer>
            {Object.keys(services).map((service) => (
              <CheckboxItem key={service}>
                <Label>
                  <StyledCheckbox
                    type="checkbox"
                    checked={services[service as keyof typeof services]}
                    onChange={() => handleServiceChange(service as keyof typeof services)}
                  />{' '}
                  {service}
                </Label>
              </CheckboxItem>
            ))}
          </CheckboxContainer>
        </Sidebar>
        <UploaderContainer>
          <UpupUploader
            baseConfigs={baseConfigs}
            cloudStorageConfigs={cloudStorageConfigs}
            googleConfigs={googleConfigs}
            oneDriveConfigs={oneDriveConfigs}
            uploadAdapters={uploadAdapters}
          />
        </UploaderContainer>
      </ContentContainer>
    </Container>
  </>
);
};

export default Page;