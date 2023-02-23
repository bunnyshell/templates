<?php

namespace App\Controller;

use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class BooksListAvailableController extends AbstractController
{
    #[Route('/books/available', name: 'app_books_list_available', methods: ['GET'])]
    public function index(
        BookRepository $bookRepository,
    ): JsonResponse {
        $books = $bookRepository->findBy([
            'available' => true,
        ]);

        return $this->json($books, context: ['groups' => ['book:read']]);
    }
}
