output "rds_endpoint" {
  description = "The connection endpoint for the RDS instance"
  value       = aws_db_instance.rdsdb.endpoint
}

output "rds_port" {
  description = "The port for the RDS instance"
  value       = aws_db_instance.rdsdb.port
}

output "rds_username" {
  description = "The username for the RDS instance"
  value       = var.username
}

output "rds_password" {
  description = "The password for the RDS instance"
  value       = random_string.password.result
  sensitive   = true
}
