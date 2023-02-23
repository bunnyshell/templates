<?php

namespace App\Controller;

use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BooksDeleteController extends AbstractController
{
    #[Route('/books/{id}', name: 'app_books_delete', methods: ['DELETE'])]
    public function index(
        int $id,
        BookRepository $bookRepository,
    ): JsonResponse {
        $book = $bookRepository->find($id);

        if (null !== $book) {
            $bookRepository->remove($book, true);
        }

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
