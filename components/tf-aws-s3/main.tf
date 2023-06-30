provider "aws" {}

resource "aws_s3_bucket" "demo_bunnyshell_books" {
  bucket = var.bucket_name
  force_destroy = true
}

resource "aws_s3_bucket_ownership_controls" "demo_bunnyshell_books_ownership" {
  bucket = aws_s3_bucket.demo_bunnyshell_books.bucket
  rule {
    object_ownership = "ObjectWriter"
  }
}

resource "aws_s3_bucket_public_access_block" "demo_bunnyshell_books_public_access" {
  bucket = aws_s3_bucket.demo_bunnyshell_books.bucket

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "demo_bunnyshell_books_acl" {
  bucket = aws_s3_bucket.demo_bunnyshell_books.bucket
  acl    = "public-read"

  depends_on = [
    aws_s3_bucket_ownership_controls.demo_bunnyshell_books_ownership,
    aws_s3_bucket_public_access_block.demo_bunnyshell_books_public_access,
  ]
}

resource "aws_s3_bucket_cors_configuration" "demo_bunnyshell_books_cors" {
  bucket = aws_s3_bucket.demo_bunnyshell_books.bucket

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["PUT", "POST"]
    allowed_origins = ["*"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }

  depends_on = [aws_s3_bucket.demo_bunnyshell_books]
}
