variable "length" {
  description = "The desired length of the password."
  type        = number
  default     = 16
}

variable "lower" {
  description = "Include lowercase alphabet characters."
  type        = bool
  default     = true
}

variable "min_lower" {
  description = "Minimum number of lowercase alphabet characters."
  type        = number
  default     = 0
}

variable "upper" {
  description = "Include uppercase alphabet characters."
  type        = bool
  default     = true
}

variable "min_upper" {
  description = "Minimum number of uppercase alphabet characters."
  type        = number
  default     = 0
}

variable "numeric" {
  description = "Include numeric characters."
  type        = bool
  default     = true
}

variable "min_numeric" {
  description = "Minimum number of numeric characters."
  type        = number
  default     = 0
}

variable "special" {
  description = "Include special characters."
  type        = bool
  default     = true
}

variable "min_special" {
  description = "Minimum number of special characters."
  type        = number
  default     = 0
}

variable "override_special" {
  description = "Supply your own list of special characters to use for string generation."
  type        = string
  default     = "!@#$%&*()-_=+[]{}<>:?"
}
