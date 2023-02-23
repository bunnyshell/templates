<?php

namespace App\Controller;

use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class BooksShowController extends AbstractController
{
    #[Route('/books/{id}', name: 'app_books_show', methods: ['GET'])]
    public function index(
        int $id,
        BookRepository $bookRepository,
    ): JsonResponse {
        $book = $bookRepository->find($id);

        if (null === $book) {
            throw $this->createNotFoundException();
        }

        return $this->json($book, context: ['groups' => ['book:read']]);
    }
}
