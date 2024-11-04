"use client";

import React, { useState, useEffect, FC } from 'react';
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

const ContentContainer = styled.div`

`;

const Sidebar = styled.aside`
 
`;

const CheckboxContainer = styled.div`
 
`;

const CheckboxItem = styled.div`

`;


const StyledCheckbox = styled.input`

`;

const Label = styled.label`
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
const Page: FC = () => {
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
    setKey: () => setCanUpload(true),
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
    <div className="font-sans font-Poppins m-0 p-0 bg-[#f8f9fa]">
      <div className="flex flex-col items-center pt-[70px] min-h-[10vh] w-[100%]">
        <div className="md:text-5xl text-gray-800 md:px-5 px-0 mt-16 transition md:mt-10 text-3xl">
          Upup File Uploader Demo
        </div>
        <div className="lg:text-base md:max-lg:text-sm max-md:text-xs text-gray-700 leading-relaxed max-md:text-left max-md:max-w-md md:max-lg:max-w-sm max-md:px-3 md:max-lg:px-4 max-md:mt-10 md:max-lg:mt-20 transition mt-5">
          This is a demonstration of the UpUp uploader. Select the sources you
          want to enable and then upload
        </div>
        <div className="flex w-[80%] max-w-[1200px] mt-[80px] mb-[20px] max-md:flex-col max-md:items-center">
          <div className="md:w-[30%] md:pr-[20px] flex flex-col max-md:w-[80%] max-md:pr-0 max-md:mb-[20px]">
            <div className="text-[1.5em] mb-[20px] font-[#007bff]">
              Remote Sources
            </div>
            <div className="max-md:flex max-md:flex-col max-md:items-start grid grid-cols-[repeat(auto-fill, minmax(120px, 1fr))] gap-[10px] mt-10px">
              {Object.keys(services).map((service) => (
                <div
                  className="flex items-center max-md:mb-[10px]"
                  key={service}
                >
                  <label className="cursor-pointer transition block hover:font-[#007bff]">
                    <input
                      type="checkbox"
                      className="mr-[10px] text-[#007bff]"
                      checked={services[service as keyof typeof services]}
                      onChange={() =>
                        handleServiceChange(service as keyof typeof services)
                      }
                    />{" "}
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[80%] md:w-[70%]">
            <UpupUploader
              baseConfigs={baseConfigs}
              cloudStorageConfigs={cloudStorageConfigs}
              googleConfigs={googleConfigs}
              oneDriveConfigs={oneDriveConfigs}
              uploadAdapters={uploadAdapters}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);
};

export default Page;