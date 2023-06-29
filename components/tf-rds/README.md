# AWS RDS Terraform Module

This module creates an Amazon RDS (Relational Database Service) instance on AWS (Amazon Web Services) with optional use of a DB snapshot for data population. The RDS instance uses the Postgres engine.

## Prerequisites

- Terraform v0.14.0 or newer
- An AWS account

## Usage

To use this module, you'll need to provide values for the following variables:

- `allocated_storage`: The amount of storage to allocate to the RDS instance.
- `instance_class`: The instance type of the RDS instance.
- `username`: The username for the master DB user.
- `engine_version`: The version of the Postgres engine to use.
- `db_name`: The name of the database.
- `db_port`: The port for the RDS instance.
- `snapshot_identifier`: (Optional) The identifier for the DB snapshot to restore. If this is left empty, a new DB will be created.
- `vpc_cidr`: The CIDR block for the VPC that the RDS instance will be a part of.

## Outputs

The module will output the following:

- `rds_endpoint`: The connection endpoint for the RDS instance.
- `rds_port`: The port for the RDS instance.
- `rds_username`: The username for the RDS instance.
- `rds_password`: The password for the RDS instance. This is sensitive output.

## Warnings

- This module outputs the RDS password, which is sensitive information. Ensure the output is being handled securely.
- If `skip_final_snapshot` is set to `true` (as in the current configuration), no final DB snapshot will be created upon RDS instance deletion. Adjust this setting according to your needs.
- If `snapshot_identifier` is used, ensure the snapshot is available and in a usable state. The snapshot must be in the same AWS region as the RDS instance being created.

## Further Steps

You may need to adjust security group settings or VPC settings based on your specific network setup, such as allowing your application servers to access the RDS instance. Please consider these configurations based on your specific use case and security requirements.

## Run `terraform apply`

- Traffic from `vpc_cidr` will be allowed.  
- `snapshot_identifier` is optional; if provided, it will initialize the database with the snapshot indicated by the parameter's value.  
- `allowed_cidrs` is optional, and may be a list (JSON array) of CIDRs to allow traffic from. If specified and the IPs are external, `publicly_accessible` must also be set to `true`.

```bash
terraform apply --auto-approve \
  -var="prefix=bns-123" \
  -var="instance_class=db.t3.micro" \
  -var="allocated_storage=20" \
  -var="engine=postgres" \
  -var="engine_version=15.3" \
  -var="db_name=books" \
  -var="snapshot_identifier=books-demo-snapshot" \
  -var="username=bunnyshell" \
  -var="db_port=5432" \
  -var="vpc_cidr=10.0.0.0/16" \
  -var='allowed_cidrs=["111.123.222.255/32"]'\
  -var="publicly_accessible=true"
```

## Populate the database with a snapshot

In order to have the database seeded when it is created, you need to specify a snapshot to be used. The following describes just as this can be achieved.

### 1. Create a Snapshot
You can create a snapshot of your RDS DB instance from the AWS Management Console, AWS CLI, or the RDS API.

#### AWS Management Console
Navigate to _RDS > Databases_, select the DB instance that you want to create a snapshot of, and choose _Take snapshot_.

#### AWS CLI
You can use the `create-db-snapshot` command. Replace `db-instance-identifier` with the name of your DB instance and `db-snapshot-identifier` with the name you want to give your DB snapshot:

```
aws rds create-db-snapshot \
    --db-instance-identifier db-instance-identifier \
    --db-snapshot-identifier db-snapshot-identifier
```

### 2. Get the Snapshot Identifier
After the snapshot is created, you can find it in the AWS Management Console under _RDS > Snapshots_.
The name of the snapshot is the snapshot identifier. If you used the AWS CLI to create the snapshot, the snapshot identifier is what you specified for `db-snapshot-identifier`.

### 3. Use the Snapshot Identifier in Terraform
Once you have the snapshot identifier, you can use it as the value for the `snapshot_identifier` variable in your Terraform configuration.
If you set this variable, Terraform will create a new RDS DB instance from the specified snapshot.

## IAM permissions

You will need a user with a policy containing the following permissions to run this module:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "rds:CreateDBInstance",
                "rds:DescribeDBInstances",
                "rds:ModifyDBInstance",
                "rds:DeleteDBInstance",
                "rds:CreateDBSnapshot",
                "rds:DeleteDBSnapshot",
                "rds:DescribeDBSnapshots",
                "rds:RestoreDBInstanceFromDBSnapshot",
                "rds:AddTagsToResource",
                "rds:ListTagsForResource",
                "ec2:DescribeAccountAttributes",
                "ec2:DescribeAvailabilityZones",
                "ec2:CreateSecurityGroup",
                "ec2:DeleteSecurityGroup",
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:AuthorizeSecurityGroupEgress",
                "ec2:RevokeSecurityGroupIngress",
                "ec2:RevokeSecurityGroupEgress",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSubnets",
                "ec2:DescribeVpcs",
                "ec2:DescribeNetworkInterfaces"
            ],
            "Resource": "*"
        }
    ]
}
```
