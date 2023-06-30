output "s3_bucket_name" {
  value = aws_s3_bucket.demo_bunnyshell_books.id
}
output "s3_bucket_region" {
  value = aws_s3_bucket.demo_bunnyshell_books.region
}
