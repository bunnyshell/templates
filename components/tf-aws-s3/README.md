# AWS RDS Terraform Module

This module creates an Amazon S3 (Object Storage) instance on AWS (Amazon Web Services).

## Prerequisites

- Terraform v0.14.0 or newer
- An AWS account

## Usage

To use this module, you'll need to provide values for the following variables:

- `bucket_name`: The name of the bucket.

## Outputs

The module will output the following:

- `s3_bucket_name`: The name of the created bucket.
- `s3_bucket_region`: The region of the created bucket.

## Further Steps

It would be best for you to create an IAM user also for the application, which only has permissions to read and write files into the bucket.

## Run `terraform apply`

```bash
terraform apply --auto-approve \
  -var "bucket_name=your-bucket-name"
```

## IAM permissions

You will need a user with a policy containing the following permissions to run this module:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "s3:ListAllMyBuckets",
        "s3:ListBucket",
        "s3:ListBucketVersions",
        "s3:CreateBucket",
        "s3:DeleteBucket",
        "s3:GetAccelerateConfiguration",
        "s3:GetBucketLocation",
        "s3:GetBucketLogging",
        "s3:GetBucketPolicy",
        "s3:GetBucketPolicyStatus",
        "s3:GetBucketRequestPayment",
        "s3:GetBucketTagging",
        "s3:GetEncryptionConfiguration",
        "s3:GetLifecycleConfiguration",
        "s3:GetBucketObjectLockConfiguration",
        "s3:GetReplicationConfiguration",
        "s3:GetBucketAcl",
        "s3:PutBucketAcl",
        "s3:GetBucketCORS",
        "s3:PutBucketCORS",
        "s3:GetBucketVersioning",
        "s3:PutBucketVersioning",
        "s3:GetBucketWebsite",
        "s3:GetBucketOwnershipControls",
        "s3:PutBucketOwnershipControls",
        "s3:GetBucketPublicAccessBlock",
        "s3:PutBucketPublicAccessBlock",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObjectTagging",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl",
        "s3:DeleteObjectVersion",
        "s3:DeleteObjectTagging",
        "s3:DeleteObjectVersionTagging"
      ],
      "Resource": "*"
    }
  ]
}
```

