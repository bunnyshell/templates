provider "aws" {}

resource "aws_db_instance" "rdsdb" {
  identifier           = "${var.prefix}-${var.db_name}"
  instance_class       = var.instance_class
  allocated_storage    = var.allocated_storage
  engine               = var.engine
  engine_version       = var.engine_version
  db_name              = var.db_name
  username             = var.username
  password             = random_string.password.result
  parameter_group_name = "default.${var.engine}${split(".", var.engine_version)[0]}"

  publicly_accessible = var.publicly_accessible
  iam_database_authentication_enabled = false

  port                 = var.db_port
  skip_final_snapshot  = true
  snapshot_identifier  = var.snapshot_identifier == "" ? null : var.snapshot_identifier
  vpc_security_group_ids = [aws_security_group.sg.id]

}

resource "random_string" "password" {
  length = 16
  special = false
}

resource "aws_security_group" "sg" {
  name        = "${var.prefix}-rds-allow-traffic"
  description = "Allow inbound and outbound traffic"

  ingress {
    description = "Allowed internal IP addresses"
    from_port   = var.db_port
    to_port     = var.db_port
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr]
  }

  ingress {
    description = "Allowed external IP addresses"
    from_port   = var.db_port
    to_port     = var.db_port
    protocol    = "tcp"
    cidr_blocks = var.allowed_cidrs
  }

  egress {
    description = "Allowed all outbound traffic"
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}
