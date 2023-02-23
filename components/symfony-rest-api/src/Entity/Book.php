<?php

namespace App\Entity;

use App\Repository\BookRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: BookRepository::class)]
class Book
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: "Mandatory input field.", groups: ['Default', 'edit', 'create'])]
    #[Assert\Length(min:3, max:255, minMessage: "The value should be between 3 and 255 characters.", maxMessage: "The value should be between 3 and 255 characters.", groups: ['Default', 'edit', 'create'])]
    private string $title;

    #[ORM\Column(length: 255, nullable: true)]
    #[Assert\Length(max:255, maxMessage: "Description should have no more than 255 characters.", groups: ['Default', 'edit', 'create'])]
    private ?string $description = null;

    #[ORM\Column(type: "boolean", options: ['default' => 0])]
    private bool $available = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAvailable(): bool
    {
        return $this->available;
    }

    public function setAvailable(bool $available): self
    {
        $this->available = $available;

        return $this;
    }
}
