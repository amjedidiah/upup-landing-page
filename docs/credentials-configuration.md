---
sidebar_position: 4
---

# Credentials Configuration

## Client-side

### Google Drive

1. Create a [Google Cloud Project](https://console.cloud.google.com/)
2. Enable **Google Drive API**:
   - Navigation Menu > APIs & Services > Library > Search `Google Drive API`
3. Create OAuth 2.0 Client ID:
   - APIs & Services > Credentials > Create Credentials > OAuth client ID
   - Application Type: `Web application`
   - Add authorized JavaScript origins matching your domain
4. Get API Key:
   - Credentials > Create Credentials > API Key

### OneDrive

1. Register Application in [Azure Portal](https://portal.azure.com/):
   - App Registrations > New Registration
   - Supported account types: `Accounts in any organizational directory`
2. Add Redirect URI:
   - Authentication > Add Platform > Web
   - `https://your-domain.com/onedrive-callback`
3. Add API Permissions:
   - Files.ReadWrite, User.Read (delegated)

## Server-side Configurations

### AWS S3

1. Create IAM User:
   - AWS Console > IAM > Users > Add user
   - Programmatic access type
2. Attach Permissions Policy:
   - `AmazonS3FullAccess`
   - `AWSCloudFormationReadOnlyAccess`

:::info
Don't worry about configuring CORS for your S3 bucket, we'll do it programmatically for you
:::

### Azure Blob Storage

1. Create Storage Account:
   - Azure Portal > Storage Accounts > Create
   - Account kind: StorageV2
   - Replication: LRS
2. Get Connection String:
   - Security + networking > Access keys
3. Assign RBAC Role:
   - Access Control (IAM) > Add role assignment
   - Storage Blob Data Contributor
4. Configure CORS via Azure CLI:

```bash
az storage cors add --services b \
--origins https://your-domain.com \
--methods PUT \
--allowed-headers \
--max-age 3600
```

[Azure Storage CORS Documentation](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-custom-domain-name)

### Backblaze B2

1. Create Application Key:
   - B2 Cloud Storage > Application Keys
   - Allow access to: All buckets
   - Copy `keyID` and `applicationKey`
2. Region Format:
   - Example: `eu-central-003`
3. Endpoint Format:
   - `https://s3.<region>.backblazeb2.com`
   - Example: `https://s3.eu-central-003.backblazeb2.com`

:::note
**Special Configuration:**

```ts
s3GeneratePresignedUrl({
      ...,
      s3ClientConfig: {
        ...,
        endpoint: process.env.BACKBLAZE_S3_ENDPOINT, // required for other S3 providers asides AWS
        forcePathStyle: false, // required for other S3 providers asides AWS
      },
    });
```

:::

:::info
Don't worry about configuring CORS for your S3 bucket, we'll do it programmatically for you
:::

[Backblaze S3 Compatibility Guide](https://www.backblaze.com/docs/cloud-storage-s3-compatible-api)

### Digital Ocean Spaces

1. Create Space:
   - DO Control Panel > Spaces > Create
   - Choose region (e.g., nyc3)
2. Generate Access Keys:
   - Settings > Spaces Access Keys
3. Region Format:
   - Example: `nyc3`
4. Endpoint Format:
   - `https://<region>.digitaloceanspaces.com`
   - Example: `https://nyc3.digitaloceanspaces.com`

:::note
**Special Configuration:**

```ts
s3GeneratePresignedUrl({
      ...,
      s3ClientConfig: {
        ...,
        endpoint: process.env.BACKBLAZE_S3_ENDPOINT, // required for other S3 providers asides AWS
        forcePathStyle: false, // required for other S3 providers asides AWS
      },
    });
```

:::

:::info
Don't worry about configuring CORS for your S3 bucket, we'll do it programmatically for you
:::

[DigitalOcean Spaces Guide](https://docs.digitalocean.com/products/spaces/)

## Security Best Practices

1. Always restrict CORS origins
2. Use IAM roles instead of root credentials where possible
3. Rotate API keys frequently(quarterly)

:::warning
 Never commit credentials to version control. Use environment variables and secret management systems.
 :::
