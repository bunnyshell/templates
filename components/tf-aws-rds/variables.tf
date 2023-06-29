variable "prefix" {
  description = "Prefix for all resource names"
  type        = string
  default     = ""  # default is no prefix
}

variable "engine" {
  description = "The database engine to use"
  type        = string
}

variable "allocated_storage" {
  description = "The amount of storage to allocate to the RDS instance"
  type        = number
}

variable "instance_class" {
  description = "The instance type of the RDS instance"
  type        = string
}

variable "username" {
  description = "Username for the master DB user"
  type        = string
}

variable "snapshot_identifier" {
  description = "DB snapshot to restore. Leave empty to create a new DB"
  type        = string
  default     = ""
}

variable "engine_version" {
  description = "Engine version for the RDS instance"
  type        = string
}

variable "db_name" {
  description = "Database name for the RDS instance"
  type        = string
}

variable "db_port" {
  description = "Database port for the RDS instance"
  type        = number
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
}

variable "allowed_cidrs" {
  description = "List of CIDR blocks to allow traffic from"
  type        = list(string)
}

variable "publicly_accessible" {
  description = "Whether or not the RDS instance should be publicly accessible"
  type        = bool
  default     = false
}
