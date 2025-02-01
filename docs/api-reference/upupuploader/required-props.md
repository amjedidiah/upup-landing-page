---
sidebar_position: 1
---

# Required Props

These props are required for the UpupUploader component to work.

| Prop | Example | Type | Status | Default Value |
| ---  | ------- | ---- | ------ | ------------- |
| [provider](#provider) | `provider={UpupProvider.DigitalOcean}` | UpupProvider | required | - |
| [tokenEndpoint](#tokenendpoint) | `tokenEndpoint=http://localhost:3000/api/upload` | string | required | - |

## `provider`

This prop determines what cloud storage the selected files are uploaded to.

:::info
When using TypeScript, the provider must be one of the enum values from [UpupProvider](/docs/category/upupuploader) to avoid type errors:

```typescript
export enum UpupProvider {
    AWS = 'aws',
    Azure = 'azure',
    BackBlaze = 'backblaze',
    DigitalOcean = 'digitalocean',
}
```

The component will throw an error if you pass these values as a string.
:::

```typescript
throw new Error(`Invalid provider: ${this.config.provider}`)
```

Here is an example of using the Azure Provider:

```tsx
import { UpupUploader, UpupProvider } from "@devino.solutions/upup";

export default function Uploader() {
  return (
    <UpupUploader
      provider={UpupProvider.Azure} // assuming we are uploading to Azure
      tokenEndpoint="<path_to_your_server>" // Path to your server route that calls our exported upload utilities
    />
  );
}
```

## `tokenEndpoint`

This prop refers to the endpoint or route on your server that handles the file upload POST request from the UpupUploader component. It must be passed with http or https included. For example: `http://localhost:8008/<your_route>`

The POST request sent is of this this format:

```typescript
interface TokenRequest {
    name: string
    type: string
    size: number
    provider: UpupProvider
    multiple?: boolean
    accept?: string
    maxFileSize?: number
}
```

And returns a response of this:

```typescript
interface PresignedUrlResponse {
    uploadUrl: string
    key: string
}
```

:::note
Your server must configure CORS (Cross-Origin Resource Sharing) to explicitly allow requests from your client application's origin. This is required because the browser blocks cross-origin requests by default.

Here's a basic Express server configuration example:

```javascript
import express from "express";
import cors from "cors";

const app = express();

// Configure CORS middleware
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000', // Your client's origin
  methods: ['POST'], // Only allow required methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Exact headers might vary based on your server setup
  credentials: true
}));

// Your token endpoint handler
app.post('/api/upload-token', (req, res) => {
  // Handle upload logic here
});
```

:::
