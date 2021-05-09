terraform {
 
  backend "s3" {}

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 2.70"
    }
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "default"
}

data "aws_s3_bucket_object" "lambda" {
  bucket = "notes-app-uploads-cloudxpert"
  key    = "api/dist/app.zip"
}

resource "aws_lambda_function" "example" {
  function_name = "HelloWorld"

  # "app.js" is the filename within the zip file (main.js) and "handler"
  # is the name of the property under which the handler function was
  # exported in that file.
  s3_bucket         = data.aws_s3_bucket_object.lambda.bucket
  s3_key            = data.aws_s3_bucket_object.lambda.key
  s3_object_version = data.aws_s3_bucket_object.lambda.version_id
  handler           = "app.handler"
  runtime           = "nodejs12.x"
  role              = aws_iam_role.lambda_exec.arn
}


# IAM role which dictates what other AWS services the Lambda function
# may access.
resource "aws_iam_role" "lambda_exec" {
  name = "serverless_example_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}